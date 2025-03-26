import React, { useState, useEffect } from "react";

const QuizCreate = () => {
  const [numQuestions, setNumQuestions] = useState(1);
  const [quizData, setQuizData] = useState(
    Array.from({ length: numQuestions }, () => ({
      question: "",
      options: ["", "", "", ""],
      answer: null,
    }))
  );
  const [quizCode, setQuizCode] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState({ type: "", message: "" });
  const [focusedOption, setFocusedOption] = useState(0);

  // Clear error when required fields are filled
  useEffect(() => {
    const current = quizData[currentQuestion];
    if (error.type === "question" && current.question.trim()) {
      setError({ type: "", message: "" });
    } else if (error.type === "options" && !current.options.some(opt => !opt.trim())) {
      setError({ type: "", message: "" });
    } else if (error.type === "answer" && current.answer !== null) {
      setError({ type: "", message: "" });
    }
  }, [quizData, currentQuestion, error.type]);

  const handleNumQuestionsChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 100) {
      setNumQuestions(value);
      setQuizData(
        Array.from({ length: value }, (_, i) =>
          i < quizData.length
            ? quizData[i]
            : { question: "", options: ["", "", "", ""], answer: null }
        )
      );
    }
  };

  const handleQuestionChange = (index, value) => {
    setQuizData(prevData => {
      const newData = [...prevData];
      newData[index].question = value;
      return newData;
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    setQuizData(prevData => {
      const newData = [...prevData];
      newData[questionIndex].options[optionIndex] = value;
      return newData;
    });
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setQuizData(prevData => {
      const newData = [...prevData];
      newData[questionIndex].answer = optionIndex;
      return newData;
    });
  };

  const handleKeyDown = (e, optionIndex) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (optionIndex < 3) {
        setFocusedOption(optionIndex + 1);
        document.getElementById(`option-${currentQuestion}-${optionIndex + 1}`)?.focus();
      }
    }
  };

  const validateCurrentQuestion = () => {
    const current = quizData[currentQuestion];
    
    if (!current.question.trim()) {
      setError({ type: "question", message: "Please enter a question." });
      return false;
    }
    
    if (current.options.some(opt => !opt.trim())) {
      setError({ type: "options", message: "Please fill in all options." });
      return false;
    }
    
    if (current.answer === null) {
      setError({ type: "answer", message: "Please select the correct answer." });
      return false;
    }
    
    setError({ type: "", message: "" });
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentQuestion()) return;
    setCurrentQuestion(currentQuestion + 1);
    setFocusedOption(0);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
    setFocusedOption(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCurrentQuestion()) return;
    const code = `QZ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setQuizCode(code);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-gray-800">
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center">Create a New Quiz</h1>
        <div className="mt-6">
          <label className="block text-xl font-semibold">Number of Questions</label>
          <input
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="1"
            max="100"
            className="w-full p-3 mt-2 rounded-lg text-gray-800 outline-none border border-gray-300"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xl font-semibold">
                Question {currentQuestion + 1}
              </label>
              <input
                type="text"
                placeholder="Enter your question here"
                value={quizData[currentQuestion].question}
                onChange={(e) => handleQuestionChange(currentQuestion, e.target.value)}
                className={`w-full p-3 mt-2 rounded-lg text-gray-800 outline-none border ${
                  error.type === "question" ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            <div>
              <label className="block text-xl font-semibold">Options</label>
              {quizData[currentQuestion].options.map((option, optionIndex) => (
                <div key={optionIndex} className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name={`correct-answer-${currentQuestion}`}
                    checked={quizData[currentQuestion].answer === optionIndex}
                    onChange={() => handleAnswerSelect(currentQuestion, optionIndex)}
                    className={`mr-3 w-6 h-6 cursor-pointer ${
                      error.type === "answer" ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    id={`option-${currentQuestion}-${optionIndex}`}
                    type="text"
                    placeholder={`Option ${optionIndex + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(currentQuestion, optionIndex, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, optionIndex)}
                    className={`w-full p-3 rounded-lg text-gray-800 outline-none border ${
                      error.type === "options" ? "border-red-500" : "border-gray-300"
                    }`}
                    autoFocus={optionIndex === focusedOption}
                  />
                </div>
              ))}
            </div>
          </div>
          {error.message && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error.message}
            </div>
          )}
          <div className="flex justify-between mt-4">
            {currentQuestion > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {currentQuestion < numQuestions - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-gray-800 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gray-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-green-700"
              >
                Generate Quiz Code
              </button>
            )}
          </div>
        </form>

        {quizCode && (
          <div className="mt-8 text-center text-lg font-semibold">
            <p>Quiz Created! Use this code to access the quiz:</p>
            <p className="text-2xl text-yellow-500">{quizCode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCreate;