// Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../server/firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password); //createUserWithEmailAndPassword
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen boarder flex flex-col items-center">
      <h1 className="mb-4">Register</h1>
      {error && <p className="error">{error}</p>}
      <form
        onSubmit={handleRegister}
        className="border border-spacing-2 border-black p-4"
      >
        <div className="mb-2">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Create account
        </button>
      </form>
      <button className="btn btn-delete">
        <Link to="/login"> Back </Link>
      </button>
    </div>
  );
};

export default Register;
