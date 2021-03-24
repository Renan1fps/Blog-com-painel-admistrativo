const express = require("express");
const app = express();
const connection = require("./database/dataBase");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/articlesController");

app.use(express.urlencoded({ extended: true }));
//app.use(express.json);
app.set("view engine", "ejs");
app.use(express.static("public"));

connection
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida!");
  })
  .catch((erro) => {
    console.log("Erro!");
  });

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(8080, (erro) => {
  if (!erro) {
    console.log("Servidor iniciado!");
  } else {
    console.log("Erro no servidor!");
  }
});
