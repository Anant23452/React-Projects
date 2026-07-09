import React from 'react'

export default function RecentSearches({ recentSearches, setUsername }) {
  return (
    <div className="max-w-md p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-xs">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        🕒 Recent Searches
      </h2>

      {recentSearches.length === 0 ? (
        <p className="text-sm text-gray-500 italic pl-1">No recent searches</p>
      ) : (
        <ul className="space-y-1.5">
          {recentSearches.map((search, index) => (
            <li key={index}>
              {/* Arrow function prevents the infinite re-render loop */}
              <button
                onClick={() => setUsername(search)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-colors duration-150 flex items-center gap-2 font-medium"
              >
                <span className="text-gray-400 group-hover:text-blue-500">🔍</span>
                {search}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

