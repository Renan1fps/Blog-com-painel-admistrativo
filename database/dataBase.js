const  Sequelize  = require("sequelize");

const connection = new Sequelize("guiapress", "root", "20030927", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
