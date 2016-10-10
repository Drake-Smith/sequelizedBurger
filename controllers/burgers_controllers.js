var express = require('express');
var router = express.Router();
//var burger = require('../models/burger.js');
var models = require('../models');


router.get('/', function(req, res) {
	res.redirect('/index');
});

// //renders all burgers on page
// router.get('/index', function(req, res) {
// 	burger.selectAll(function (data) {
// 		var hbsObject = { burgers: data };
// 		console.log("All Burgs: " + hbsObject);
// 		res.render('index', hbsObject);
// 	});
// });
router.get('/index', function(req, res) {
	models.Burger.findAll().then(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});

router.post('/index/insertOne', function(req, res) {
	models.Burger.create({
		burger_name: req.body.burger_name,
	}).then(function() {
		res.redirect('/index');
	});
});

router.put('/index/updateOne/:id', function(req, res) {
	models.Burger.update(
	{
		devoured: req.body.devoured
	},
	{
		where: { id : req.params.id }
	})
	.then(function (result) {
		res.redirect('/');
	});
});

router.delete('/index/delete/:id', function(req, res) {
	models.Burger.destroy({
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.redirect('/');
	});
});


module.exports = router;


