import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {

          const [enteredbody, setEnteredBody] = useState("");
          const [enteredAuthor, setEnteredAuthor] = useState("");

          function bodyChangeHandler(event){
                    setEnteredBody(event.target.value);
          }
          function authorChangeHandler(event){
                    setEnteredAuthor(event.target.value);
          }

          let modalContent;
          
          if(isPosting){
                    modalContent = <Modal onClose={onStopPosting}>
                    <NewPost 
                              onBodyChange={bodyChangeHandler} 
                              onAuthorChange={authorChangeHandler}
                    />
                    </Modal>
          }

          return (
          <>
                    {modalContent}
                    <ul className={classes.posts}>
                              <Post author="Phoenix" body="'Almost Christmas' means it wasn't Christmas!"/>
                              <Post author={enteredAuthor} body={enteredbody}/>
                    </ul>
          </>);
}

export default PostList;