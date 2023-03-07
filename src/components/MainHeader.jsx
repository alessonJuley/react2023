// to make this react-icons available to your code base
// open terminal and type npm install react-icons
// you have to stop running your app tho before you do this
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}> {/* this changes the URL to /create-post */}
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;