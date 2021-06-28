import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
