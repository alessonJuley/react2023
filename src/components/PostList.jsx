import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList() {

          const [modalIsVisible, setModalIsVisible] = useState(true);
          const [enteredbody, setEnteredBody] = useState("");
          const [enteredAuthor, serEnteredAuthor] = useState("");

          function hideModalHandler(){
                    setModalIsVisible(false);
          }

          function bodyChangeHandler(event){
                    setEnteredBody(event.target.value);
          }
          function authorChangeHandler(event){
                    serEnteredAuthor(event.target.value);
          }

          let modalContent;
          
          if(modalIsVisible){
                    modalContent = <Modal onClose={hideModalHandler}>
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