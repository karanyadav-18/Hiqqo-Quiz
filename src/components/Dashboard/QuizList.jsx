import React, { useState } from "react";

const quizzes = [
  {
    id: 1,
    title: "Data structure and algorithm with C++ (Quiz)",
    author: "Jaya kishori",
    time: "14:29 PM, 25 August",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Operating system (Quiz)",
    author: "Jaya kishori",
    time: "14:23 PM, 25 August",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Weekly coding test (Quiz)",
    author: "Jaya kishori",
    time: "14:23 PM, 25 August",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "System design with Java (Quiz)",
    author: "Jaya kishori",
    time: "14:23 PM, 25 August",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Web dev daily coding test (Quiz)",
    author: "Jaya kishori",
    time: "14:23 PM, 25 August",
    image: "https://via.placeholder.com/150",
  },
]; 

const MYlibrary = () => {
  const [activeTab, setActiveTab] = useState("Published");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "Published" ? "bg-gray-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("Published")}
        >
          Published
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "Draft" ? "bg-gray-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("Draft")}
        >
          Draft
        </button>
      </div>

      {/* Quiz List */}
      <div className="bg-white rounded-lg shadow-md">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="flex items-center p-4 border-b last:border-b-0"
          >
            <img
              src={quiz.image}
              alt={quiz.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{quiz.title}</h3>
              <p className="text-sm text-gray-500">
                {quiz.author} • {quiz.time}
              </p>
            </div>
            <button className="px-4 py-2 border rounded flex items-center space-x-1">
              👁 Preview
            </button>
            <button className="ml-2 px-4 py-2 bg-gray-900 text-white rounded flex items-center space-x-1">
              📡 Live quiz
            </button>
            <button className="ml-2 p-2">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MYlibrary;