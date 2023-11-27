const express = require("express");
const path = require("path");

const friendRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const port = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
  next();
  const end = Date.now();
  console.log(`${end - start} ms`);
});

const publicPath = path.join(__dirname, "public");
app.use("/site", express.static(publicPath));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "dynamic title from server.js",
    caption: "what a beautiful animal!",
  });
});
app.use("/friends", friendRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`listening to prot ${port}`);
});
