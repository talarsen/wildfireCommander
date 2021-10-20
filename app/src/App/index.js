import React from "react";

import { Routes, Route } from "react-router-dom";

import "../components/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChooseFire from "../components/ChooseFire";
import Header2 from "../components/Header2";

// import ProminentAppBar from "../components/Header";
// import Navbar from "../components/Navbar";
// import Tasks from "../Tasks";
// import styles from "./styles.module.scss";

const App = () => {
  const myStyle = {
    marginBottom: "25px",
  };
  return (
    <>
      <header style={myStyle}>
        <Header2 />
      </header>
      <ChooseFire />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
};
//grids go in home
const Home = () => (
  <>
    <header>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <p>{process.env.REACT_APP_SUBTITLE}</p>
    </header>
  </>
);

//put grid here too
const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
