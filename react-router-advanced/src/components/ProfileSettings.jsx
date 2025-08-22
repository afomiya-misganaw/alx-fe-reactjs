import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="profile-section">
      <h3>Profile Settings</h3>
      <div className="settings-form">
        <div className="form-group">
          <label>Notification Preferences:</label>
          <select>
            <option>All notifications</option>
            <option>Important only</option>
            <option>None</option>
          </select>
        </div>
        <div className="form-group">
          <label>Theme:</label>
          <select>
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <button>Save Settings</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
