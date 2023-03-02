import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {

          let modalContent;
          
          if(isPosting){
                    modalContent = <Modal onClose={onStopPosting}>
                    <NewPost 
                              onCancel={onStopPosting}
                    />
                    </Modal>
          }

          return (
          <>
                    {modalContent}
                    <ul className={classes.posts}>
                              <Post author="Phoenix" body="'Almost Christmas' means it wasn't Christmas!"/>
                    </ul>
          </>);
}

export default PostList;