import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {

          const [posts, setPosts] = useState(false);

          const [isFetching, setIsFetching] = useState(false);

          useEffect(() => {
                    async function fetchPosts(){
                              setIsFetching(true);
                              const response = await fetch("http://localhost:8080/posts");
                              const resData = await response.json();
                              setPosts(resData.posts);
                              setIsFetching(false);
                    }

                    fetchPosts();
          }, []);

          function addPostHandler(postData){
                    fetch("http://localhost:8080/posts", {
                              method: "POST",
                              body: JSON.stringify(postData),
                              headers: {
                                        "Content-Type": "application/json"
                              }
                    });
                    setPosts((existingPosts) => [postData, ...existingPosts]);
          }

          let modalContent;
          
          if(isPosting){
                    modalContent = <Modal onClose={onStopPosting}>
                    <NewPost 
                              onCancel={onStopPosting}
                              onAddPost={addPostHandler}
                    />
                    </Modal>
          }

          return (
          <>
                    {modalContent}
                    {!isFetching && posts.length > 0 && (
                    <ul className={classes.posts}>
                              {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
                    </ul>)
                    }
                    {!isFetching && posts.length === 0 && 
                    <div className={classes.noPost}>
                              <h2>There are no post yet.</h2>
                              <p>Start adding some!</p>
                    </div>}
                    {isFetching && <div className={classes.loading}>
                              <h2>Loading posts...</h2>
                    </div>

                    }
          </>);
}

export default PostList;