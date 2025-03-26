import React from "react";
import { FaFilter, FaSort, FaUsers, FaTrash } from "react-icons/fa";

const quizzes = new Array(6).fill().map(() => ({
  title: "Data structure and algorithm with C++ (Quiz)",
  date: "25, August",
  participants: 23,
  progress: 48,
}));

const Reports = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Filters & Sort Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 border rounded flex items-center space-x-1">
          <FaFilter /> <span>Filters</span>
        </button>
        <button className="px-4 py-2 border rounded flex items-center space-x-1">
          <FaSort /> <span>Sort</span>
        </button>
      </div>

      {/* Quiz List */}
      <div className="bg-white rounded-lg shadow-md">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            <div>
              <h3 className="font-semibold">{quiz.title}</h3>
              <p className="text-sm text-gray-500">{quiz.date}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FaUsers /> <span>{quiz.participants}</span>
              </div>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black"
                  style={{ width: `${quiz.progress}%` }}
                ></div>
              </div>
              <span>{quiz.progress}%</span>
              <button className="text-red-500 flex items-center space-x-1">
                <FaTrash /> <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;