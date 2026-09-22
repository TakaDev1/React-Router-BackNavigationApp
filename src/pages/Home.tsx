import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigation = useNavigate();

  const handleAboutNavigation = () => {
    navigation("/about");
  };
  return (
    <div>
      <h2 className="py-10">Home</h2>
      <button
        onClick={handleAboutNavigation}
        className="w-1/4 bg-gray-500 text-white rounded-full hover:opacity-80 cursor-pointer py-2 transition"
      >
        Aboutページ
      </button>
    </div>
  );
};

export default Home;
