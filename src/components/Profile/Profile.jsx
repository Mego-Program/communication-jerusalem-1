import React, { useState } from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileUserName from './ProfileUserName';
import ProfileAbout from './ProfileAbout';
import EditProfileButton from './EditProfileButton';

const Profile = () => {
  const [avatar, setAvatar] = useState('avatar.png');
  const [userName, setUserName] = useState('User Name');
  const [about, setAbout] = useState('About Me');
  const [isEditing, setIsEditing] = useState(false);

  const initialProfile = { avatar, userName, about };

  return (
    <div>
      {isEditing ? (
        // Render editable profile components
        <div>
          <ProfileAvatar avatar={avatar} onAvatarChange={setAvatar} />
          <ProfileUserName userName={userName} onUserNameChange={setUserName} />
          <ProfileAbout about={about} onAboutChange={setAbout} />
        </div>
      ) : (
        // Render read-only profile components
        <div>
          <ProfileAvatar avatar={avatar} />
          <ProfileUserName userName={userName} />
          <ProfileAbout about={about} />
        </div>
      )}

      <EditProfileButton
        initialProfile={initialProfile}
        onSave={(newProfile) => {
          setAvatar(newProfile.avatar);
          setUserName(newProfile.userName);
          setAbout(newProfile.about);
          setIsEditing(false); // Set isEditing to false after saving
        }}
        isEditing={isEditing} // Pass isEditing to control the button's behavior
        onClick={() => setIsEditing(!isEditing)} // Toggle isEditing when the button is clicked
      />
    </div>
  );
};

export default Profile;
