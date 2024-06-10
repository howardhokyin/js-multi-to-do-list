// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './reusable/UserProfile';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex items-center gap-5 bg-slate-200 p-3">
      <h1 className="flex-1 text-left font-bold">To Do List</h1>
      <nav className="flex-1 flex space-x-5 font-semibold">
        <Link to="/" className="hover:bg-blue-400">
          Home
        </Link>
        <Link to="/login" className="hover:bg-blue-400">
          Login
        </Link>
      </nav>
      <UserProfile className="text-right" />
    </div>
  );
};

export default NavBar;
