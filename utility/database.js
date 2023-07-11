/*
// get the client
const mysql = require("mysql2")

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node-app',
  password:"mysql123"
});



module.exports=connection



*/



//WITH ORM - sequlize

const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('node-app', 'root', 'mysql123', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports=sequelize