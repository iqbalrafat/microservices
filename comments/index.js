const express= require('express')
const {randomBytes} = require ("crypto")
const bodyParser = require ('body-parser')
const app=express();

app.use(bodyParser.json());
//since we are not using data base and using memory we will use the object to handle data encoding
//the object name clearly show that it will contain the data of specific postID.
const commentsByPostId={};


app.get('/posts/:id/comments', (req,res)=>{
  res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req,res)=>{
  //every comment has some id so we use randomBytes to generate one
  const commentId=randomBytes(4).toString('hex');
  //the post will come in body as a content which will string, like title etc.
  const {content} = req.body;
  //The commentsByPostId object will contains all comments of a specific postId , 
  //therefore it will be array. If there is no comment then there will be an empty array
  const comments = commentsByPostId[req.params.id] || [];

  // now we need to push all content into comments array

  comments.push({id:commentId, content});

  // now we replace the commentsById with comments to get the upadted comments

  commentsByPostId[req.params.id]=comments;

  // once comments are updated send the data to other services
  res.status(201).send(comments);
});

app.listen(4001,()=>{
  console.log("listening on 4001")
})