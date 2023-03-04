import classes from "./Post.module.css";
// this part is about the actual post containing the author and text
function Post(props) {

          return (<li className={classes.post}>
                    <p className={classes.author}>{props.author}</p>
                    <p className={classes.text}>{props.body}</p>
          </li>);
}

export default Post;