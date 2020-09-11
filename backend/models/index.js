//Uses config from config/db.config.js
const dbConfig = require('../config/db.config.js');
const mysql = require('mysql');

//Creates mysql connection
const connection = mysql.createConnection(dbConfig)

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${dbConfig.database}`);
});

module.exports = connection;
