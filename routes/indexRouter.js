const { Router } = require("express");
const indexRouter = Router();

const games = [
  {name: "DragonBall Sparking Zero",
  developer: "Unknown",
  stock: "10",
  price: "$99.99"},
  
  {name: "DragonBall Sparking Zero",
  developer: "Unknown",
  stock: "10",
  price: "$99.99"}
  ]

  const links = [
    { href: "/new", text: "+ Add Product" }
  ];


indexRouter.get("/", (req, res) => {
res.render("index", { title: "gamStore", games: games, links: links });
});

//indexRouter.get("/", (req, res) => {
 // res.render("index", { links: links });
//});

indexRouter.post("/new", (req, res) => {
  const { name, developer, stock, price  } = req.body;
  games.push({ name: name, developer: developer, stock: stock, price: price });
  console.log(games);
  res.redirect("/");
});


//indexRouter.get("/", (req, res) => {
 // res.render("index", { games: games });
 // });
  
//indexRouter.get("/new", (req, res) => {
//res.render("form", { title: "All Games", games: games });
//});

indexRouter.post("/new", (req, res) => {
});

module.exports = indexRouter;


