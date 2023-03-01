import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {

          return (<ul className={classes.posts}>
                    <Post author="Phoenix" body="'Almost Christmas' means it wasn't Christmas!"/>
                    <Post author="Grant" body="Give it up for day 15!"/>
          </ul>);
}

export default PostList;