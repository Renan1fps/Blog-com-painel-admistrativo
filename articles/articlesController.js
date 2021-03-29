const express = require("express");
const router = express.Router();
const Article = require("./Article");
const slugify = require("slugify");
const Category = require("../categories/Category");

router.get("/admin/articles", (req, res) => {
  Article.findAll().then((articles) => {
    res.render("admin/articles/index", { articles: articles });
  });
});

router.get("/admin/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories: categories });
  });
});

router.post("/articles/save", (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var id = req.body.category;
  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: id,
  }).then(() => {
    res.redirect("/admin/articles");
  });
});

module.exports = router;
