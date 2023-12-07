import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import PomodoroTimer from "../PomodoroTimer";
import GitHubCard from "../GitHubCard";

function Home(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className="bg-slate-800 ml-80 text-white justify-center items-center rounded m-[10rem] items-center">
      {props.name ? (
        <div>
          <div className="items-center justify-center">
            <PomodoroTimer />
          </div>
          <h2 className="mt-6 p-2 text-lg text-center">
            Welcome, {props.name}
          </h2>
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded mt-4 ml-[26rem] mb-4"
            onClick={props.handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <h2 className="mt-6 p-2 text-lg text-center" onClick={handleLogout}>
          Please login
        </h2>
      )}
      <div>
     
      </div>
    </div>
  );
}

export default Home;
