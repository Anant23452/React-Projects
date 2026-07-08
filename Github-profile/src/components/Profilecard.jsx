import React from "react";

export default function Profilecard({ user }) {
  if (!user) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-6 bg-gray-300 rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-2xl">
      {/* Top Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 w-full" />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8">
        {/* Left Column: Avatar & Basic Info */}
        <div className="md:col-span-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-slate-50">
            <img
              src={user.avatar_url}
              alt={`${user.name || user.login}'s avatar`}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold text-slate-800 mt-4 leading-tight">
            {user.name || user.login}
          </h1>
          <p className="text-sm font-medium text-blue-600 mb-4">
            @{user.login}
          </p>

          {user.company && (
            <div className="mt-2 text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 w-full max-w-[200px]">
              <span className="font-semibold block text-slate-400 text-xs uppercase tracking-wider mb-0.5">
                Company
              </span>
              <span className="truncate block">{user.company}</span>
            </div>
          )}
        </div>

        {/* Right Column: Bio, Stats & Repos */}
        <div className="md:col-span-2 flex flex-col justify-between space-y-6">
          {/* Bio Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Bio
            </h3>
            {user.bio ? (
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {user.bio}
              </p>
            ) : (
              <p className="text-slate-400 italic text-sm">
                This user hasn't added a bio yet.
              </p>
            )}
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="text-center p-2">
              <span className="block text-xl font-bold text-slate-800">
                {user.followers}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Followers
              </span>
            </div>

            <div className="text-center p-2">
              <span className="block text-xl font-bold text-slate-800">
                {user.following}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Following
              </span>
            </div>

            <div className="text-center p-2 bg-blue-50 border border-blue-100 rounded-lg">
              <span className="block text-xl font-bold text-blue-600">
                {user.public_repos}
              </span>
              <span className="text-xs font-semibold text-blue-500">
                Public Repos
              </span>
            </div>
          </div>

          {/* View Profile Link Footer */}
          <div className="flex justify-end pt-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              View GitHub Profile →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
