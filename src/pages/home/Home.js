import React from "react";
import "./Home.css";
import hand from "../../assets/hand.png";

const Home = () => {
  return (
    <div className="home">
      <img src={hand} alt="" />
      <h1>Welcome Our slack chat app</h1>
    </div>
  );
};

export default Home;
