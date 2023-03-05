import classes from './NewPost.module.css';
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {

          return (
          <Modal>
                    {/* 
                              Form and form are 2 different things. 
                              Form is a react-router-dom component.
                              form is a regular built-in form element.
                     */}
                    <Form method="post" className={classes.form}>
                              <p>
                                        <label htmlFor="body">Text</label>
                                        <textarea id="body" name="body" required rows={3}/> 
                                        {/* name is added so we can extract and submit data in this textfield */}
                              </p>
                              <p>
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" id="name" name="author" required/>
                                        {/* name is added so we can extract and submit data in this textfield */}
                              </p>
                              <p className={classes.actions}>
                                        <Link to=".."type="button">Cancel</Link>  {/* this goes back to home */}
                                        <button>Post</button>
                              </p>
                    </Form>
          </Modal>
          );
}

export default NewPost;

export async function action({request}){

          const formData = await request.formData(); 
          // request.formData() gets access to the data encoded in the form above
          // request is an object btw

          const postData = Object.fromEntries(formData);
          // this postData creates a basic key-value object 
          // { body: "some value", author: "some value"}

          // this sends request 
          await fetch("http://localhost:8080/posts", {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                              "Content-Type": "application/json"
                    }
          });

          return redirect("/");
          // redirect generates a response object which is returned by async function action({request})
          // if redirect reponse happens, React Router will redirect to a different route
}