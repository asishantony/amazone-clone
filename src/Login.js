import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase sign in
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };
  const register = (e) => {
    e.preventDefault();
    //some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="Logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signinButton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to the AMAZON Fake Clone conditions to sue
        </p>
        <button className="login__registerButton" onClick={register}>
          Create Amazon Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
