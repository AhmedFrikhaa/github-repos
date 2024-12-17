const BASE_URL = 'https://api.github.com';

export const fetchRepos = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  const repos = await response.json();
  return repos.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language,
    description: repo.description,
    url: repo.html_url,
    stargazerCount: repo.stargazerCount,
    forkCount: repo.forkCount,
    updatedAt: repo.updatedAt,
  }));
};
