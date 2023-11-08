import React from 'react';

const ProfileUserName = ({ userName, onUserNameChange }) => {
  const handleUserNameChange = (event) => {
    const newUserName = event.target.value;
    onUserNameChange(newUserName);
  };

  return (
    <div>
      <input type="text" value={userName} onChange={handleUserNameChange} />
    </div>
  );
};

export default ProfileUserName;
