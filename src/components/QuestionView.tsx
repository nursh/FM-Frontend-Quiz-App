import { useReducer, useState } from "react";
import Question from "./Question";
import QuestionOption from "./QuestionOption";
import type { Question as TQuestion } from '@app/utils/types';
import { reducer } from "./reducers/QuestionReducer";


type Props = {
  questions: TQuestion[];
};

export default function QuestionView({ questions }: Props) {

  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    currentQuestion: questions[0]
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const onSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const quizProgress = () => {
    return (state.index + 1) / questions.length;
  }
  
  const handleClick = () => {
    dispatch({ type: 'inc', questions })
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
            />
          ))}
        </div>
        <button onClick={handleClick}>Submit Answer</button>
      </div>
    </div>
  );
}
