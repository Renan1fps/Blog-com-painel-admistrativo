const Sequelize = require("sequelize");
const connection = require("../database/dataBase");

const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Category.sync({force: true}) só executa uma vez

module.exports = Category;