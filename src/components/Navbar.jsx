import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './reusable/UserProfile';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex items-center justify-between bg-slate-200 p-3">
      <div>
        <Link to="/">
          <h1 className="font-bold">To Do List</h1>
        </Link>
      </div>
      <nav className="flex-1 flex justify-center space-x-5 font-semibold">
        <Link to="/" className="hover:bg-blue-400">
          Home
        </Link>
        <Link to="/login" className="hover:bg-blue-400">
          Login
        </Link>
        {/* <Link to="/MarkDownNote" className="hover:bg-blue-400">
          Mark Down Note
        </Link> */}
      </nav>
      <UserProfile className="text-right" />
    </div>
  );
};

export default NavBar;
