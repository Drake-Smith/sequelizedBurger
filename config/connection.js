var mysql = require('mysql');
var connection;

// if (process.env.JAWSDB_URL){
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'password',
// 		database: 'burger_db'
// 	});
// };

var Sequelize = require('sequelize'),
if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize('burger_sequelize_db', 'root', 'password', {
		host: 'localhost',
		dialect: 'mysql',
		port: '3000'
	})
}

connection.connect(function (err) {
	if (err) {
		console.error('error connection: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;