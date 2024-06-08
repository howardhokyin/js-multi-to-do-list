import React, { useState } from 'react';
import { firebaseAuth } from '../server/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, isLoading] = useState(false);
  const auth = firebaseAuth;

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <label>Password</label>
      </form>

      <button onClick={handleGoogleLogin}>Continue with Google</button>
    </div>
  );
};

export default Login;
