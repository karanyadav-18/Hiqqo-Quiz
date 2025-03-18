import React from "react";
function Landing5() {
  return (
    <div className="bg-[rgb(22,5,54)] bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 text-center shadow-lg min-h-[80vh] w-[90vw] pt-[2rem] flex flex-col justify-center items-center relative">
        {/* Updated button with rounder border and new colors */}
        <button className="rounded-full bg-[rgb(22,5,54)] text-white px-6 py-3 mb-4 border-2 border-[rgb(22,5,54)] text-xl">
          Start Quiz
        </button>
        <h1 className="text-4xl font-bold text-[rgb(22,5,54)]">
          Test Your <span className="text-green-600">Knowledge</span> with <br/> Our Fun Quiz
        </h1>
        <h4 className="text-gray-600 mt-4">
          Challenge yourself with exciting questions across various topics. <br /> Improve your skills, learn something new, and have fun! <br /> Are you ready to begin?
        </h4>
        {/* Adding the light purple color at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-[rgb(154,111,200)]"></div>
      </div>
    </div>
  );
};
export default Landing5;