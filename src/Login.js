import React, { useState, useContext } from "react";
import { AuthContext } from "./App";
import * as firebase from 'firebase'
import { withRouter } from 'react-router-dom'

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {

    e.preventDefault();
    firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            Auth.setLoggedIn(true);
            setUser(res.user.displayName);
          }
        })
        .catch(e => {
          setErrors(e.message);
        });
      })
  
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => { 
      firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        Auth.setLoggedIn(true)
        setUser(res.user.displayName);
      })
      .catch(e => setErrors(e.message))
    })
   
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button onClick={() => signInWithGoogle()} className="googleBtn" type="button">
          Google
        </button>
        <button type="submit">Login</button>
        <p>{error}</p>
        <p>{user}</p>
        <p>{email}</p>
      </form>
    </div>
  );
};

export default withRouter(Login);