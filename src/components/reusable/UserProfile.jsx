// src/components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { firebaseAuth } from '../../server/firebase';
import SignOutButton from './SignOutButton';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="text-right">
      {user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}</p>
          <SignOutButton />
        </div>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
  );
};

export default UserProfile;
