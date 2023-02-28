// this will act as the "root component"

import Post from "./components/Post";

function App() {
  return <main>
    <Post author="Phoenix" body="'Almost Christmas' means it wasn't Christmas!"/>
    <Post author="Grant" body="Give it up for day 15!"/>
  </main>;
}

export default App;
