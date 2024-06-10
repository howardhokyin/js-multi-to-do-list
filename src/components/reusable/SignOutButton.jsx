import React from 'react';
import { firebaseAuth } from '../../server/firebase';
import { signOut } from 'firebase/auth';

const SignOutButton = () => {
  return (
    <div>
      <button
        className="btn btn-delete"
        onClick={() => {
          signOut(firebaseAuth);
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
