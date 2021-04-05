const express = require("express");
const router = express.Router();
const User = require("./User");

router.get("/admin/users", (req, res) => {
  res.send("Listagem de usuarios");
});


router.get("/admin/user/create", (req, res) => {
   res.render("admin/users/create")
  });

 // User.sync({force: false}) só para criar a tabela caso não exista

module.exports = router;
