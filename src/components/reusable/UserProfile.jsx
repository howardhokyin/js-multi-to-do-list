import React, { useState } from 'react';
import { firebaseAuth } from '../../server/firebase';

const UserProfile = () => {
  const user = firebaseAuth.currentUser;
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="">
      {user !== null ? (
        <div>
          <p>Welcome</p>
        </div>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
  );
};

export default UserProfile;
