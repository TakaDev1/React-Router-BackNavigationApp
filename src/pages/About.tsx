import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2 className="py-10">About</h2>
      <button
        onClick={handleBackHome}
        className="w-1/4 bg-gray-500 text-white rounded-full hover:opacity-80 cursor-pointer py-2 transition"
      >
        戻る
      </button>
    </div>
  );
};

export default About;
