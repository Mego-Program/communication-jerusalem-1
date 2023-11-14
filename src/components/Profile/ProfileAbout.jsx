import React from 'react';

const ProfileAbout = ({ about, onAboutChange }) => {
  const handleAboutChange = (event) => {
    const newAbout = event.target.value;
    onAboutChange(newAbout);
  };

  return (
    <div>
      <textarea value={about} onChange={handleAboutChange} />
    </div>
  );
};

export default ProfileAbout;
