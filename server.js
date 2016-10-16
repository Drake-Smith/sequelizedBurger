var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// var Umzug = require('umzug');
// var umzug = new Umzug({});

var app = express();
var models = require('./models');


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port);

models.sequelize.sync().then(function() {
	var server = app.listen(app.get('port'));
});


