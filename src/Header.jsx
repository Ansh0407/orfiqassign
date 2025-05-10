import React, { useContext } from "react";
import { Search } from "lucide-react";
import { AppContext } from "./AppContext";

const Header = () => {
  const { toggleViewMode, viewMode, setSortOption, sortOption } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center mt-8 p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">QRFIQ Hive</h1>
        <div className="relative">
          <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search files or folders..."
            className="pl-8 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="edited">Recently Edited</option>
          <option value="created">Date Created</option>
        </select>

        <button
          onClick={toggleViewMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {viewMode === "table" ? "Grid View" : "Table View"}
        </button>
      </div>
    </div>
  );
};

export default Header;