import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Feedback from "./components/Feedback";
import Solution from "./components/Solution";
import "./App.css";

const App = () => {
  return (
    <div className="tot">
      <Header />
      <div className="flex-container">
        <Input />
        <Feedback />
        <Solution />
      </div>
    </div>
  );
};

export default App;
