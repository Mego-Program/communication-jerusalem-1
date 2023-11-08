import React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const ProfileAvatar = ({ avatar, onAvatarChange }) => {
  const handleAvatarChange = (event) => {
    const newAvatar = event.target.files[0];
    onAvatarChange(newAvatar);
  };

  return (
    <div>
      <Avatar src={avatar} alt="User Avatar" />
      <input
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
        id="avatarInput"
      />
      <label htmlFor="avatarInput">
        <Button variant="contained" color="primary" component="span">
          Change Avatar
        </Button>
      </label>
    </div>
  );
};

export default ProfileAvatar;
