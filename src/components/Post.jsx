const names = ["Grant", "Phoenix"];

function Post() {
          const randomName = Math.random() > 0.5 ? names[0] : names[1];

          return (<div>
                    <p>{randomName}</p>
                    <p>"Almost Christmas" means it wasn't Christmas!</p>
          </div>);
}

export default Post;