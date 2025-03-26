import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import { DataProvider } from "../../App";

function Navbar() {
  const headerRef = useRef(null);
  const location = useLocation();
  const { page, setPage } = useContext(DataProvider);
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100 }, // Initial state
      { y: 0, duration: 0.8, ease: "power2.out" } // Final state
    );
  }, []);
 
  return (
    <header
      ref={headerRef}
      className="bg-white z-50 top-0 text-gray-800 fixed  p-4 w-screen h-22 flex items-center justify-center border-b-2"
    >
      <div className="w-full flex justify-between items-center ">
        <Link to={"/"} className="flex gap-4 items-center justify-start">
          <img
            src="./Navbar/logo.png"
            className="w-[50px] animate-bounce"
            alt=""
            srcset=""
          />
          <h1 className="text-[40px] font-bold">
            Hi<span className="text-gray-200">qq</span>o
          </h1>
        </Link>
        {token && location.pathname != "/" && <Header />}

        {location.pathname == "/" && (
          <nav className="w-3/4 justify-center flex text-[22px] font-bold">
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:border-b-4 transition-all duration-75">
                  Create Quiz
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-4 transition-all duration-75">
                  Browse Quizzes
                </Link>
              </li>
              {/* <li>
              <a href="#" className="hover:text-blue-300">
                Leaderboard
              </a>
            </li> */}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-4 text-center">
          <Link className="btn p-2 text-white w-[100px]" to={"/login"}>
            {token ? "Dashboard" : "Login"}
          </Link>
          {!token ? (
            <Link
              className="btn p-2 text-center text-white w-[100px]"
              to={"/signup"}
            >
              Sign up
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
