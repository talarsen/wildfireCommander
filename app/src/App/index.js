import * as React from "react";

import { Routes, Route, NavLink } from "react-router-dom";

import Tasks from "../Tasks";
import Summary from "../components/Summary";

// import styles from "./styles.module.scss";

const App = () => (
  <>
    <header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        | <NavLink to="dashboard">Dashboard</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
    <Summary />
  </>
);
//grids go in home
const Home = () => (
  <>
    <header>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <p>{process.env.REACT_APP_SUBTITLE}</p>
    </header>
    <Tasks />
  </>
);

//put grid here too
const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
