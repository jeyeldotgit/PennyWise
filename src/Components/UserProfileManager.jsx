import React, { useState, useEffect } from 'react';

const UserProfileManager = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    birthdate: '',
    about_me: ''
  });

  // Load saved data from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    setIsEditing(false);
  };

  return (
    <div className="bg-[#f5e8c7] rounded-lg p-6 shadow-md max-w-3xl mx-auto">
      {/* Avatar */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-28 h-28 bg-pink-300 rounded-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Avatar"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Conditional Rendering */}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">USERNAME</label>
            <input
              type="text"
              value={user.username}
              disabled
              className="w-full bg-[#3d3272] text-white rounded-lg p-3 cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">EMAIL ADDRESS</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full bg-[#3d3272] text-white rounded-lg p-3 cursor-not-allowed"
            />
          </div>

          {/* Birthdate */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">BIRTHDATE</label>
            <input
              type="date"
              name="birthdate"
              value={profileData.birthdate}
              onChange={handleChange}
              className="w-full bg-[#3d3272] text-white rounded-lg p-3"
            />
          </div>

          {/* About Me */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">ABOUT ME</label>
            <textarea
              name="about_me"
              value={profileData.about_me}
              onChange={handleChange}
              className="w-full bg-[#7c89b8] text-white rounded-lg p-3 h-28"
              placeholder="Tell something about yourself..."
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {/* Username */}
          <div className="bg-[#3d3272] text-white rounded-lg p-3">
            <p className="font-bold">USERNAME</p>
            <p>{user.username}</p>
          </div>

          {/* Email */}
          <div className="bg-[#3d3272] text-white rounded-lg p-3">
            <p className="font-bold">EMAIL ADDRESS</p>
            <p>{user.email}</p>
          </div>

          {/* Birthdate */}
          <div className="bg-[#3d3272] text-white rounded-lg p-3">
            <p className="font-bold">BIRTHDATE</p>
            <p>{profileData.birthdate || 'N/A'}</p>
          </div>

          {/* About Me */}
          <div className="bg-[#7c89b8] text-white rounded-lg p-3 h-28">
            <p className="font-bold">ABOUT ME</p>
            <p>{profileData.about_me || 'Tell something about yourself...'}</p>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileManager;
