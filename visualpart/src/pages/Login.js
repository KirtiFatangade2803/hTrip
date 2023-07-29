import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logpic from "./login.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert(
        "Invalid login : Either Register first or fill the field properly "
      );
      console.log("login failed");
    } else {
      window.alert("Welcome...!! ");
      console.log("login successfull");
      navigate("/");
    }
  };

  return (
    <>
      <div className="loguser">
        <img src={logpic} alt="login" className="logimg" />
        <div className="transbox">
          <h3>Login</h3>
          <br />
          <form method="POST" className="logform">
            <br />
            <label htmlFor="email"> E-mail</label>
            <br />
            <input
              type="email"
              className="input1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <br />
            <br />
            <label htmlFor="username"> Password</label>
            <br />
            <input
              type="password"
              className="input1"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter password"
            />
            <br />
            <br />
            <br />

            <input
              type="submit"
              id="login"
              value="Log in"
              onClick={loginUser}
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

//tej123@gmail.com
//pass 12345
