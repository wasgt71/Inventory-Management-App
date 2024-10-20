const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");

/*const games = [
  {name: "DragonBall Sparking Zero",
  developer: "Uknown",
  stock: "10",
  price: "$99.99"}
  ]

  */
// app.js



/*


//app.get("/", (req, res) => {
res.render("index", { title: "gamesstore", games: games });
});*/

//app.get("/new", (req, res) => {
 // res.render("Form");
//});
const links = [
  { href: "/", text: "Home" }
];

app.get("/new", (req, res) => {
res.render("Form", { title: "links", links: links });
});

app.get("/form", (req, res) => {
  res.render("Form");
});


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});