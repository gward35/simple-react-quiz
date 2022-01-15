import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import { store } from "../store";

const ResultsScreen = (props) => {
  let navigate = useNavigate();

  const getCorrectAnswerTotal = () => {
    let count = 0;
    let storeCorrectAnswers = [];

    for (let i = 0; i < props.quizData.length; i++) {
      //loop thru questions and store correct answers
      storeCorrectAnswers.push(props.quizData[i].correct_answer);
    }

    for (let j = 0; j < storeCorrectAnswers.length; j++) {
      // compare stored answers with user answers - if each index matches increment
      if (storeCorrectAnswers[j] === props.answers[j]) {
        count++;
      }
    }

    return count;
  };

  const handleResetPress = () => {
    store.dispatch({
      type: "RESET_QUIZ",
    });
    navigate("/");
  };

  return (
    <div className="results-container">
      <h1>
        You Scored {getCorrectAnswerTotal()}/{props.questionTotal}
      </h1>
      {props.quizData.map((item, i) => {
        return (
          <li
            key={item.question}
            className={`question-results ${
              item.correct_answer === props.answers[i] ? "correct" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: item.question }}
          />
        );
      })}
      <Button onClick={handleResetPress}>Play Again</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    quizData: state.quiz.quizData,
    questionTotal: state.quiz.quizData?.length,
    answers: state.quiz.answers,
  };
};

export default connect(mapStateToProps, null, null)(ResultsScreen);
