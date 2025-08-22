import React from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const location = useLocation();

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      
      <nav className="profile-nav">
        <Link 
          to="details" 
          className={location.pathname.includes('details') ? 'active' : ''}
        >
          Profile Details
        </Link>
        <Link 
          to="settings" 
          className={location.pathname.includes('settings') ? 'active' : ''}
        >
          Profile Settings
        </Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/" element={<div>Select a profile section</div>} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
