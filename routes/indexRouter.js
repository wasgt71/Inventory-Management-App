const { Router } = require("express");
const indexRouter = Router();

const games = [
  {
    name: "DragonBall Sparking Zero",
    developer: "Unknown",
    stock: "10",
    price: "$99.99",
    id: Math.random(),
  },

  {
    name: "RDR2",
    developer: "Unknown",
    stock: "10",
    price: "$99.99",
    id: Math.random(),
  },
];

const links = [{ href: "/new", text: "+ Add Product" }];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "gamStore", games: games, links: links });
});

//indexRouter.get("/", (req, res) => {
// res.render("index", { links: links });
//});

indexRouter.post("/new", (req, res) => {
  const { name, developer, stock, price, id } = req.body;
  games.push({
    name: name,
    developer: developer,
    stock: stock,
    price: price,
    id: id,
  });
  console.log(games);
  res.redirect("/");
});

indexRouter.post("/index", (req, res) => {
  const { id } = req.body;
  const trueId = Number(id);
  const index = games.findIndex((game) => game.id == trueId); 
  if (index !== -1) {
    games.splice(index, 1); 
  }
  res.redirect("/");
  console.log(id);
});

//const gameIndex = games.forEach(games.findIndex(game => game.id === id));

//if(gameIndex !== -1){
//console.log(games.splice(gameIndex, 1));
//}

//games.splice(gameIndex, 1);

//indexRouter.get("/", (req, res) => {
// res.render("index", { games: games });
// });

//indexRouter.get("/new", (req, res) => {
//res.render("form", { title: "All Games", games: games });
//});

indexRouter.post("/new", (req, res) => {});

module.exports = indexRouter;
