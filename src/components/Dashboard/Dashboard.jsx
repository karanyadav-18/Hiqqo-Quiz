import React, { useContext, useEffect } from "react";
import Sidebar from "../Common/Sidebar";
import { useState } from "react";
import QuizTypeModal from "./SelectQuizType";
import { DataProvider } from "../../App";
import MYlibrary from "./QuizList";
import Reports from "./Reports";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {page,setPage} = useContext(DataProvider)

  return (
    <div className="flex">
      <Sidebar onCreateQuiz={setIsModalOpen} />
      <div className="ml-64 w-full">
        <div className="p-5">
          <QuizTypeModal isOpen={isModalOpen} onClose={setIsModalOpen} />
          {page == 'my-library' && <MYlibrary/>}
          {page == 'reports' && <Reports/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
