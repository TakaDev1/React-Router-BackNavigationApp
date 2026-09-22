import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigation = useNavigate();

  const handleAboutNavigation = () => {
    navigation("/about");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleAboutNavigation}>Aboutページ</button>
    </div>
  );
};

export default Home;
