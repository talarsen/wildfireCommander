import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header2 from "../components/Header2";

// import ProminentAppBar from "../components/Header";
// import Navbar from "../components/Navbar";
// import Tasks from "../Tasks";
// import styles from "./styles.module.scss";

const App = () => {
  return (
    <>
      <header>
        <Header2 />
      </header>
      <h1>Choose a fire.</h1>
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
