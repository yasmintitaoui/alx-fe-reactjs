import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      <nav className="mb-4 space-x-4">
        <Link to="details" className="text-blue-500 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-500 hover:underline">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
