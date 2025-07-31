import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export async function fetchUsersByAdvancedSearch(username, location, minRepos) {
  // Build the search query string with filters
  let query = `${username} in:login`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  // Search users matching criteria
  const response = await axios.get(url);

  // Fetch detailed info for each user to get location, repo count, etc.
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
      return { ...user, ...userDetails.data };
    })
  );

  return { items: detailedUsers };
}
