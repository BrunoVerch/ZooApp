'use strict';
var config = {};

config.database = {
	name: 'ZOODB',
	username: 'root',
	password: 'verchverch90',
	options:  {
		host: 'localhost',
		dialect: 'mysql'
	}
};
config.web = {
	port: 9090
};

module.exports = config;