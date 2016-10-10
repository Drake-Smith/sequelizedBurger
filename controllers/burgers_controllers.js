var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
	res.redirect('/index');
});

//renders all burgers on page
router.get('/index', function(req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log("All Burgs: " + hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/index/insertOne', function(req, res) {
	burger.insertOne(['burger_name'], [req.body.burger_name], function() {
		res.redirect('/index');
	});
});

router.put('/index/updateOne/:id', function(req, res) { 
	var condition = 'id = ' + req.params.id;

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});


//this is where

module.exports = router;


