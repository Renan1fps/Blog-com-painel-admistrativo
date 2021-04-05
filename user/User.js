const Sequelize = require("sequelize");
const connection = require("../database/dataBase");

const User = connection.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
 

module.exports = User;