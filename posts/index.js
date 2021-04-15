const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require ("crypto");
const app = express();
app.use (bodyParser.json())
//we use the object to take care of data as we are not using data base. 
const pots ={};

app.post("/posts", (req, res) => {
  //we need to give ID our post for that we use randomBytes.
  const id = randomBytes(4).toString('hex');
  const {title}=req.body;
  posts[id]={
    id,
    title
  }
});
app.get("/posts", (req, res) => {
  res.send(posts)
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
