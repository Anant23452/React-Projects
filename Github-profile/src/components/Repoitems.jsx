import React from 'react';

export default function Repoitems({ repo }) {
  // Destructuring for cleaner access
  const { 
    name, 
    description, 
    html_url, 
    language, 
    stargazers_count, 
    forks_count, 
    updated_at 
  } = repo;

  return (
    <div className="repo-card" style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      
      <p>{description || "No description available."}</p>
      
      <div className="repo-meta" style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#555' }}>
        {language && <span><strong>Language:</strong> {language}</span>}
        <span>⭐ {stargazers_count}</span>
        <span>🍴 {forks_count}</span>
      </div>
      
      <div style={{ fontSize: '0.8rem', marginTop: '10px' }}>
        Updated: {new Date(updated_at).toLocaleDateString()}
      </div>
    </div>
  );
}