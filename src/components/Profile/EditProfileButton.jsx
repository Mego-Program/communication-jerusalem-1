import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProfileAvatar from './ProfileAvatar';
import ProfileUserName from './ProfileUserName';
import ProfileAbout from './ProfileAbout';

const EditProfileButton = ({ initialProfile, onSave }) => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(profile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfile(initialProfile);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <ProfileAvatar avatar={profile.avatar} onAvatarChange={(newAvatar) => setProfile({ ...profile, avatar: newAvatar })} />
          <ProfileUserName userName={profile.userName} onUserNameChange={(newUserName) => setProfile({ ...profile, userName: newUserName })} />
          <ProfileAbout about={profile.about} onAboutChange={(newAbout) => setProfile({ ...profile, about: newAbout })} />
          <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
          <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>Edit Profile</Button>
      )}
    </div>
  );
};

export default EditProfileButton;
