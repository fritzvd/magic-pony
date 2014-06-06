// models.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('{{database_name}}', '{{database_user}}', '{{database_password}}', {
	dialect: 'postgres',
	port: 5432,
	logging: false
});

// write your own models here
module.exports = {
	db: sequelize
};