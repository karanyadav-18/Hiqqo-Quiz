import React, { useState } from "react";

const QuizTypeModal = ({ isOpen, onClose }) => {
  const [selectedQuizType, setSelectedQuizType] = useState("multiple-choice");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-xl font-semibold">Select a quiz type</h2>
        <p className="text-gray-500 text-sm">
          Choose from multiple choice or fill in the blanks
        </p>
        
        <div className="flex mt-4 space-x-4">
          <div 
            className={`w-1/2 p-4 border rounded-lg cursor-pointer ${selectedQuizType === "multiple-choice" ? "border-black" : ""}`}
            onClick={() => setSelectedQuizType("multiple-choice")}
          >
            <div className="w-full h-24 bg-gray-200 rounded"></div>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-semibold">Multiple choice</span>
              <input type="radio" name="quizType" checked={selectedQuizType === "multiple-choice"} className="accent-black" readOnly />
            </div>
            <p className="text-xs text-gray-500">Only with single select answer</p>
          </div>
          <div 
            className={`w-1/2 p-4 border rounded-lg cursor-pointer ${selectedQuizType === "fill-in-the-blanks" ? "border-black" : ""}`}
            onClick={() => setSelectedQuizType("fill-in-the-blanks")}
          >
            <div className="w-full h-24 bg-gray-200 rounded"></div>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-semibold">Fill in the blanks</span>
              <input type="radio" name="quizType" checked={selectedQuizType === "fill-in-the-blanks"} className="accent-black" readOnly />
            </div>
            <p className="text-xs text-gray-500">Fill the blanks</p>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg">Cancel</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">Select & Next</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 bg-black text-white rounded-lg"
      >
        Open Modal
      </button>
      <QuizTypeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
