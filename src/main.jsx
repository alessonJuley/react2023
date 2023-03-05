import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, { loader as postsLoader} from './routes/Posts'
import './index.css'
import NewPost, { action as newPostAction} from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'

// this part is about router (it helps in changing the URL)
const createRouter = createBrowserRouter([
  { path: "/", 
    element: <RootLayout/>,   // this one loads home w/ header 
    children: [               // children 1 of Parent
      {
        path: "/", 
        element: <Posts />,   // this one loads the posts
        loader: postsLoader,  // <Posts /> will not load until loader is done doing it's job
        children: [           // this is children 1's children
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction   // this will be triggered if a form is submitted
          },
          {
            path: "/:id",     // this is a dynamic path parameter
            element: <PostDetails/>,
            loader: postDetailsLoader
          }
        ]
      },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRouter} />
  </React.StrictMode>
)
