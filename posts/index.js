const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
//we use the object to take care of data as we are not using data base.
const posts = {};
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post("/posts", (req, res) => {
  //we need to give ID our post for that we use randomBytes.
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  //after creating Posts we inform rest of the services that post is created so send the data
  res.status(201).send(posts[id]);
});
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
