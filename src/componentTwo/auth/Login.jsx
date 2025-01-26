import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

const Login = () => {
  const { handleSignin } = useContext(AuthContext);
  return (
    <div>
      <button onClick={handleSignin}>Login</button>
    </div>
  )
}

export default Login