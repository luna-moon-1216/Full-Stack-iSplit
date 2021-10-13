import React, { useState } from 'react';

const LogIn = ({ handleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="logInContainer">
      <div className="banner">
        <div className="logo">
          <img id="logo" src="./logo.png" />
        </div>
      </div>
      <form className='logIn'>
        <label id="email">
          Username:
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="sailor@moon.com"
          ></input>
        </label>
        <label id="password">
          Password:
          <input
            name="password"
            placeholder='1234567'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </label>
        <button id="signInBtn" onClick={(e) => handleSignIn(e, email, password)}>
          Sign In
        </button>
        {/* <button >Sign Up</button> */}
      </form>
    </div>
  );
};

export default LogIn;