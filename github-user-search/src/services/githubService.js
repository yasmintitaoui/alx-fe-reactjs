import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export async function fetchUsersByAdvancedSearch(username, location, minRepos) {
  // Build the search query string
  let query = `${username} in:login`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  // Fetch list of users matching criteria
  const response = await axios.get(url);

  // For each user, fetch detailed info (for location, repo count)
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
      return { ...user, ...userDetails.data };
    })
  );

  return { items: detailedUsers };
}
