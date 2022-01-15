import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { store } from "../store";
import RadioButtons from "../components/RadioButtons";
import Button from "../components/Button";

const QuizScreen = (props) => {
  const [answerState, setAnswer] = React.useState();
  let navigate = useNavigate();
  let params = useParams();
  React.useEffect(() => {
    if (parseInt(params.id) >= props.questionTotal + 1) {
      navigate("/results");
    }
  }, [navigate, params.id, props]);

  const getQuestionById = (props, params) => {
    const questionId = params - 1;
    return props[questionId];
  };

  const quizQuestion = getQuestionById(props.quizData, params.id);

  const handleNextClick = async () => {
    store.dispatch({
      type: "SET_ANSWER_DATA",
      payload: { answer: answerState },
    });
    navigate(`/quiz/${parseInt(params.id, 10) + 1}`);
  };

  const handleRadioButtonChange = (event) => {
    setAnswer(event.target.value);
  };

  const radioButtonData = [
    { id: 0, value: "True", onChange: handleRadioButtonChange, label: "True" },
    {
      id: 1,
      value: "False",
      onChange: handleRadioButtonChange,
      label: "False",
    },
  ];

  return quizQuestion ? (
    <div className="quiz-container">
      <h1>{quizQuestion.category}</h1>
      <p dangerouslySetInnerHTML={{ __html: quizQuestion.question }} />
      <RadioButtons className="radio-buttons" items={radioButtonData} />
      <Button onClick={handleNextClick} disabled={answerState === undefined}>
        Next
      </Button>
      <p>
        {params.id} of {props.questionTotal}
      </p>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    quizData: state.quiz.quizData,
    questionTotal: state.quiz.quizData?.length,
  };
};

export default connect(mapStateToProps, null, null)(QuizScreen);
