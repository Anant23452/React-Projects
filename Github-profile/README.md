![React](https://img.shields.io/badge/React-19-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?logo=tailwind-css)
![GitHub API](https://img.shields.io/badge/API-GitHub-black?logo=github)
![License](https://img.shields.io/badge/License-MIT-green)

# 🚀 GitHub Profile Explorer

A modern React application that allows users to search any GitHub profile and explore their repositories with a clean, responsive interface.

🌐 **Live Demo:** https://github-explore-pi.vercel.app/

📂 **Repository:** https://github.com/Anant23452/Github-explore

---

## 📸 Preview

|                                                                                  |                                                                                      |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Home Page**                                                                    | **Profile View**                                                                     |
| ![Home](https://github.com/Anant23452/Github-explore/raw/main/Screenshot/home.png)   | ![Profile](https://github.com/Anant23452/Github-explore/raw/main/Screenshot/profile.png) |
| **Repository List**                                                              |                                                                                      |
| ![Repos](https://github.com/Anant23452/Github-explore/raw/main/Screenshot/repo.png) |                                                                                      |

---

## ✨ Features

- 🔍 Search GitHub users by username
- 👤 Display profile information
  - Avatar
  - Name
  - Username
  - Bio
  - Company
  - Followers & Following
  - Public Repositories
- 📂 View all public repositories
- ⭐ Sort repositories by stars
- 📄 Pagination for repositories
- ⚡ Debounced search (500ms)
- 💾 Recent searches using Local Storage
- ⏳ Loading state
- ❌ Error handling for invalid usernames
- 📱 Responsive UI

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- GitHub REST API
- Tailwind CSS
- HTML5
- CSS3

---

## 📚 What I Learned

While building this project, I practiced:

- React Components
- Props
- useState
- useEffect
- API Fetching
- Async/Await
- Conditional Rendering
- Debouncing
- Local Storage
- Component Architecture
- Pagination
- Sorting
- State Management

---

## 📁 Project Structure

src/

├── components/

│ ├── Searchbar.jsx

│ ├── Profilecard.jsx

│ ├── Repolist.jsx

│ ├── Repoitems.jsx

│ ├── Loading.jsx

│ ├── Errormsg.jsx

│ └── RecentSearches.jsx

│

├── App.jsx

└── main.jsx

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/github-profile-explorer.git
```

Move into the project

```bash
cd github-profile-explorer
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build production version

```bash
npm run build
```

---

## 📌 Future Improvements

- 🌙 Dark Mode
- 📊 Repository language filter
- ❤️ Favorite repositories
- 🔗 Copy GitHub profile link
- 📅 Show repository last updated date
- 📈 GitHub contribution graph
- 🔥 Trending repositories section

---

## 📡 API Used

GitHub REST API

https://api.github.com/users/{username}

https://api.github.com/users/{username}/repos

---

## 👨‍💻 Author

**Anant Kumar**

LinkedIn: https://linkedin.com/in/your-link

GitHub: https://github.com/Anant23452

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects and continue learning.
