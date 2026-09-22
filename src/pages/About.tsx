import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>About</h2>
      <button onClick={handleBackHome}>戻る</button>
    </div>
  );
};

export default About;
