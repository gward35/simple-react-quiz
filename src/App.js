import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import QuizScreen from "./screens/quizScreen";
import ResultsScreen from "./screens/resultsScreen";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz/:id" element={<QuizScreen />} />
        <Route path="/results" element={<ResultsScreen />} />
      </Routes>
    </div>
  );
};

export default App;
