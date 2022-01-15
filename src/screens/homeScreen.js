import React from "react";
import { store } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomeScreen = () => {
  let navigate = useNavigate();
  const getQuizData = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      const json = await response.json();
      return json.results;
    } catch (e) {
      console.error(e);
    }
  };

  const onBeginPress = async () => {
    const quizData = await getQuizData();
    store.dispatch({
      type: "SET_QUIZ_DATA",
      payload: { quizData },
    });
    navigate("/quiz/1");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Trivia Challenge</h1>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <Button onClick={onBeginPress}>Begin</Button>
    </div>
  );
};

export default HomeScreen;
