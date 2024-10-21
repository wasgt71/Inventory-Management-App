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

const links = [
  { href: "/new", text: "+ Add Product" },
  { href: "/edit", text: "Edit Product" },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "gamStore", games: games, links: links });
});

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

indexRouter.get("/index", (req, res) => {
  const { gameId, gameName, gameDeveloper, gameStock, gamePrice } = req.query;
  res.render("edit", { title: "gameInfo", gameId: gameId, gameName: gameName, gameDeveloper: gameDeveloper, gameStock: gameStock, gamePrice: gamePrice });
  console.log(gameId, gameName, gameDeveloper, gameStock, gamePrice)
});

indexRouter.post("/edit", (req, res) => {
const { name, developer, stock, price, id } = req.body;
const trueId = Number(id);
const index = games.findIndex((game) => game.id == trueId);
if (index !== -1) {
  games[index] = {name: name, developer: developer, stock: stock, price: price, id: id}
}
res.redirect("/");
console.log(id);
})
module.exports = indexRouter;
