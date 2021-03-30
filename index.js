const express = require("express");
const app = express();
const connection = require("./database/dataBase");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/articlesController");
const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.use(express.urlencoded({ extended: false }));
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
  Article.findAll().then((articles) => {
    res.render("index", { articles: articles });
  });
});

app.listen(8080, (erro) => {
  if (!erro) {
    console.log("Servidor iniciado!");
  } else {
    console.log("Erro no servidor!");
  }
});
