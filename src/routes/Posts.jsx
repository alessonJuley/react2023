// this will act as the "root component"
// this used to be App.jsx and it was originally inside src
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";


function Posts() {

  return (<>
  <Outlet />
  <main>
    <PostList />
  </main>
  </>);
}

export default Posts;
