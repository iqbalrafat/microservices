const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/posts',(req,res)=>{
  res.send(posts);

});
app.post('/events',(req,res)=>{
  //when post or comment created an event that event has type. now we use that type to further processing.
  //post or comment create event, event-bus receives it and send back to all services. 
  const {type,data}=req.body;
  if (type==="PostCreated"){
    //when we created the post it has type and data. now from data we can take out title and id.
    const {id,title}=data;

    post[id]={id,title,comments:[]};  //we added comments for future posts
  }
  if (type === 'CommentCreated') {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }

  console.log(posts);

  res.send({});
});


app.listen(4002,(req,res)=>{
  console.log("server running at 4002")
});