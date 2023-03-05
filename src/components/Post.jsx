import classes from "./Post.module.css";
// this part is about the actual post containing the author and text
import { Link } from "react-router-dom";

function Post({id, author, body}) {

          return (<li className={classes.post}>
                    <Link to={id}>
                              <p className={classes.author}>{author}</p>
                              <p className={classes.text}>{body}</p>
                    </Link>
          </li>);
}

export default Post;