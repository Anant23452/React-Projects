import React from 'react'

export default function RecentSearches({ recentSearches, setUsername }) {
  return (
    /* 
      1. W-FULL sets width to match the parent container
      2. BG-SLATE-900 / BG-OPACITY-95 blends with your dark theme
      3. BORDER-SLATE-700 keeps the card clean and crisp
    */
    <div className="w-full mt-2 p-3 bg-slate-900/95 border border-slate-700/60 rounded-xl shadow-2xl backdrop-blur-md">
      <h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2 px-2 flex items-center gap-2">
        <span>🕒</span> Recent Searches
      </h2>

      {recentSearches.length === 0 ? (
        <p className="text-xs text-slate-500 italic px-2 py-1">No recent history</p>
      ) : (
        <ul className="space-y-0.5">
          {recentSearches.map((search, index) => (
            <li key={index}>
              <button
                onClick={() => setUsername(search)}
                className="w-full text-left px-2.5 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 active:bg-slate-800 rounded-lg transition-all duration-150 flex items-center gap-2.5 font-medium group"
              >
                <span className="text-slate-500 group-hover:text-blue-400 transition-colors">🔍</span>
                <span className="truncate">{search}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
