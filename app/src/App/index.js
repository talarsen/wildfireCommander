import * as React from "react";

import { Routes, Route } from "react-router-dom";

import ProminentAppBar from "../components/Header";
import Navbar from "../components/Navbar";
// import Tasks from "../Tasks";
// import styles from "./styles.module.scss";

const App = () => (
  <>
    <header>
      <ProminentAppBar />{" "}
    </header>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  </>
);
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
