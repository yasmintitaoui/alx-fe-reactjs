import React, { useState } from 'react';
import { fetchUsersByAdvancedSearch } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUsersByAdvancedSearch(username, location, minRepos);
      if (data.items.length === 0) {
        setError('Looks like we cant find the user');
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      console.error(err);
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
          min="0"
          className="w-full px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-semibold text-lg">{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
