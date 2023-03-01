import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {

          const [enteredbody, setEnteredBody] = useState("");
          const [enteredAuthor, serEnteredAuthor] = useState("");

          function bodyChangeHandler(event){
                    setEnteredBody(event.target.value);
          }
          function authorChangeHandler(event){
                    serEnteredAuthor(event.target.value);
          }
          return (
          <>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                              <ul className={classes.posts}>
                                        <Post author="Phoenix" body="'Almost Christmas' means it wasn't Christmas!"/>
                                        <Post author={enteredAuthor} body={enteredbody}/>
                              </ul>
          </>);
}

export default PostList;