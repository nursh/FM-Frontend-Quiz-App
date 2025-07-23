import { useReducer, useRef, useState } from "react";
import QuestionOption from "./QuestionOption";
import type { Question as TQuestion } from '@app/utils/types';
import { reducer } from "./reducers/QuestionReducer";
import { useNavigate } from "react-router";
import { useResults } from "@app/context/useResults";
import IconError from '@app/assets/images/icon-error.svg';
import "@app/styles/Question.css";


type Props = {
  questions: TQuestion[];
};

export default function QuestionView({ questions }: Props) {

  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    currentQuestion: questions[0]
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { results, setResults } = useResults();
  const [validateAnswer, setValidateAnswer] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onSelect = (answer: string) => {
    setError(false);
    setSelectedAnswer(answer);
  };

  const quizProgress = () => {
    return (state.index + 1) / questions.length;
  }
  
  const handleClick = () => {

    const buttonText = buttonRef.current!.textContent;
    const questionNumber = state.index + 1;

    switch(buttonText) {

      case "Submit Answer": {
        if (selectedAnswer === '') {
          setError(true);
          break;
        } else {
          setError(false);
        }
        const isCorrectAnswer = selectedAnswer === state.currentQuestion.answer;
        setValidateAnswer(true);
        setResults([...results, isCorrectAnswer]);
        if (questionNumber < questions.length) {
          buttonRef.current!.textContent = 'Next Question';
        } else {
          buttonRef.current!.textContent = 'View Result';
        }
        break;
      }

      case "Next Question": {
        dispatch({ type: 'inc', questions });
        setValidateAnswer(false);
        setSelectedAnswer("");
        buttonRef.current!.textContent = 'Submit Answer';
        break;
      }

      case "View Result": {
        navigate(`${import.meta.env.BASE_URL}results`);
        break;
      }

      default: return;
    }
  }

  return (
    <div className="container">
      <div className="question-details flow">
        <h2 className="italics">{`Question ${state.index + 1} of ${questions.length}`}</h2>
        <p>{state.currentQuestion.question}</p>
        <progress value={quizProgress()}></progress>
      </div>

      <div className="flow">
        <div className="radio-group">
          {state.currentQuestion.options.map((option, idx) => (
            <QuestionOption
              idx={idx}
              text={option}
              name="question"
              key={option}
              selected={selectedAnswer}
              onSelect={onSelect}
              answer={state.currentQuestion.answer}
              validateAnswer={validateAnswer}
            />
          ))}
        </div>
        <button onClick={handleClick} ref={buttonRef}>Submit Answer</button>
        {error ? 
          <div className="selection-error row">
            <img src={IconError} />
            <p>Please select an answer</p>
          </div>
          : undefined}
      </div>
    </div>
  );
}
