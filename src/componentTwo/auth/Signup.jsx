import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === '' && password === ''){
        alert("Please enter username and password");
        return;
    }else{
        handleSignup({ username, password });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Signup</button>
      </form>
    </section>
  );
};

export default Signup;
