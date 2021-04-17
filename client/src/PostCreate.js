//we are using Hooks. We will use useState function that allow to use the state variable in functional components
import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  //we use state variable title and set its value to empty string
  //we use this title value in our form with addition onChange handler that will update whenever event occurs
  //when event occur it has an object target which has property value that capture the values when event occur
  const [title, setTitle] = useState("");
  const onSubmit=async (event)=>{
    event.preventDefault();
    await axios.post("http://localhost:4000/posts",{
      title
    });
    //After submitting form we need to make the input box empty
    setTitle('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div  className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default PostCreate;
