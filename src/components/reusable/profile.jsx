import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="">
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.displayName || currentUser.email}</h2>
          <p>Email: {currentUser.email}</p>
        </div>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
  );
};

export default profile;
