import {useEffect,useState } from 'react';
import './App.css';


const DEFAULT_USER = 'octocat'

function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_USER)
  const [username, setUsername] = useState(DEFAULT_USER)
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadUser = async (value) => {
    const cleanValue = value.trim()
    if (!cleanValue) {
      setError('Please enter a GitHub username.')
      return
    }

    setLoading(true)
    setError("")

    try {
      const [profileResponse, repoResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${cleanValue}`),
        fetch(`https://api.github.com/users/${cleanValue}/repos?sort=updated&per_page=10`)
      ])

      if (!profileResponse.ok) {
        throw new Error('User not found. Please try another username.')
      }

      const profileData = await profileResponse.json()
      const repoData = await repoResponse.json()

      setProfile(profileData)
      setRepos(Array.isArray(repoData) ? repoData : [])
      setUsername(cleanValue)
      setInputValue(cleanValue)
    } catch (err) {
      setProfile(null)
      setRepos([])
      setError(err.message || 'Something went wrong while fetching GitHub data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUser(DEFAULT_USER)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    loadUser(inputValue)
  }

  return (
    <div className="app-shell">
      <div className="app-card">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Search GitHub username"
            aria-label="GitHub username"
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="status">Loading profile...</p>}
        {error && <p className="status error">{error}</p>}

        {!loading && !error && profile && (
          <>
            <section className="profile-section">
              <img src={profile.avatar_url} alt={profile.login} className="avatar" />
              <div className="profile-info">
                <h1>{profile.name || profile.login}</h1>
                <p className="login">@{profile.login}</p>
                <p className="bio">{profile.bio || 'No bio available yet.'}</p>
                <div className="stats">
                  <span>{profile.public_repos} repos</span>
                  <span>{profile.followers} followers</span>
                  <span>{profile.following} following</span>
                </div>
              </div>
              
            </section>

            <section className="repos-section">
              <h2>Recent repositories</h2>
              {repos.length > 0 ? (
                <div className="repo-list">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-card"
                    >
                      <div className="repo-top">
                        <h3>{repo.name}</h3>
                        <span>{repo.stargazers_count} ★</span>
                      </div>
                      <p>{repo.description || 'No description provided.'}</p>
                      <small>{repo.language || 'Markdown'}</small>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="status">No repositories found for this user.</p>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  )
}

export default App
