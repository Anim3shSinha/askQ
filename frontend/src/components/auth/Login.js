import React from "react";
import "./login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://media1.giphy.com/media/5n1U4DoZkwllUk6cPD/giphy.gif?cid=6c09b952tz34vj4o45vlx7xu97bataz9qxh8rd9zti6s1k71&rid=giphy.gif&ct=s"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login to continue
        </button>
      </div>
    </div>
  );
}

export default Login;
