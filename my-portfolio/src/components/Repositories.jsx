import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repositories.css'; // Optional: Add custom styling

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch GitHub repositories
    axios.get('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching repositories');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="repositories">
      <div className="container">
        <h2>My GitHub Repositories</h2>
        <div className="repo-list">
          {repos.map(repo => (
            <div key={repo.id} className="repo-item">
              <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
              <p>{repo.description}</p>
              <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repositories;
