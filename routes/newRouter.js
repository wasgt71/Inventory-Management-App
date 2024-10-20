const { Router } = require("express");
const newRouter = Router();

/*const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "+ Add Product" },
  ];

newRouter.get("/new", (req, res) => {
res.render("form");
});

newRouter.post("/new", (req, res) => {
res.render("form", { game, developer, stock, price });
res.redirect("/");
})*/

module.exports = newRouter;