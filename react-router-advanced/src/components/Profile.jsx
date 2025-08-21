import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      {/* Navigation for nested routes */}
      <nav className="flex space-x-4 mb-6">
        <Link
          to="details"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Details
        </Link>
        <Link
          to="settings"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Settings
        </Link>
      </nav>

      {/* Nested routes render here */}
      <div className="border p-4 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
