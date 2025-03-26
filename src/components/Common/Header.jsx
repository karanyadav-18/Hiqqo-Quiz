import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold">My Library</h2>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search for quiz..."
          className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-indigo-600 text-white p-2 rounded-md">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <FaUserCircle className="text-2xl text-indigo-600" />
        <span className="font-medium">Jaya Kishori</span>
      </div>
    </header>
  );
};

export default Header;