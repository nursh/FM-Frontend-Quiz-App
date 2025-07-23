import "@app/styles/Options.css";
import IconCorrect from "@app/assets/images/icon-correct.svg";
import IconWrong from "@app/assets/images/icon-error.svg";

type Props = {
  text: string;
  name: string;
  onSelect: (title: string) => void;
  selected: string;
  answer: string;
  idx: number;
  validateAnswer: boolean;
};

export default function QuestionOption({
  text,
  name,
  onSelect,
  selected,
  idx,
  answer,
  validateAnswer,
}: Props) {
  const correctAnswer = text === answer;
  const answericon = correctAnswer ? IconCorrect : IconWrong;

  return (
    <label
      htmlFor={text}
      className={
        validateAnswer
          ? (text === selected && correctAnswer)
            ? "correct"
            : "wrong"
          : undefined
      }
    >
      <span>{idxLetter[idx]}</span>
      {text}
      <input
        type="radio"
        name={name}
        id={text}
        onChange={(evt) => onSelect(evt.target.value)}
        checked={selected === text}
        value={text}
      />

      {(text === selected || correctAnswer) && validateAnswer ? (
        <img
          src={answericon}
          className={selected ? "answer-icon visible" : "answer-icon"}
        />
      ) : undefined}
    </label>
  );
}

const idxLetter = ["A", "B", "C", "D"];
