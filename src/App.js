import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import Header from "./Components/header/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./pages/home/Home";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
};

export default App;
