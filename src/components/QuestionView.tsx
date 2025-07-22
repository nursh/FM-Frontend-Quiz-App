import { useReducer, useRef, useState } from "react";
import Question from "./Question";
import QuestionOption from "./QuestionOption";
import type { Question as TQuestion } from '@app/utils/types';
import { reducer } from "./reducers/QuestionReducer";
import { useNavigate } from "react-router";
import { useResults } from "@app/context/useResults";


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
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onSelect = (answer: string) => {
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
        if (isCorrectAnswer) {
          setCorrectAnswer(true);
        } else {
          setCorrectAnswer(false);
        }
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
    <div>
      <div>
        <h2>{`Question ${state.index + 1} of ${questions.length}`}</h2>
        <Question question={state.currentQuestion.question} />
        <progress value={quizProgress()}></progress>
      </div>

      <div>
        <div className="radio-group">
          {state.currentQuestion.options.map((option) => (
            <QuestionOption
              text={option}
              name="question"
              key={option}
              selected={selectedAnswer}
              onSelect={onSelect}
              correctAnswer={correctAnswer}
            />
          ))}
        </div>
        <button onClick={handleClick} ref={buttonRef}>Submit Answer</button>
        {error ? <p style={{ color: 'red' }}>Please select an answer</p> : undefined}
      </div>
    </div>
  );
}
