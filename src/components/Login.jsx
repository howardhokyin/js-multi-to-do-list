import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.open('http://localhost:3000/auth/google', '_self');
  };
  return (
    <div>
      <h3>Google Login</h3>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
