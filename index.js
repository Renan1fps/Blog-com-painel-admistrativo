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
  Article.findAll({
    order: [["id", "DESC"]],
  }).then((articles) => {
    Category.findAll().then((categories) => {
      res.render("index", { articles: articles, categories: categories });
    });
  });
});

app.get("/:slug", (req, res) => {
  var slug = req.params.slug;
  Article.findOne({
    where: {
      slug: slug,
    },
  })
    .then((article) => {
      if (article != undefined) {
        Category.findAll().then((categories) => {
          res.render("article", { article: article, categories: categories });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((error) => {
      res.redirect("/");
    });
});

app.listen(8080, (erro) => {
  if (!erro) {
    console.log("Servidor iniciado!");
  } else {
    console.log("Erro no servidor!");
  }
});
