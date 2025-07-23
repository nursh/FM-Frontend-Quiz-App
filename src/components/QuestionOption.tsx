import '@app/styles/Options.css';

type Props = {
  text: string;
  name: string;
  onSelect: (title: string) => void;
  selected: string;
  correctAnswer: boolean;
  idx: number;
};

export default function QuestionOption({
  text,
  name,
  onSelect,
  selected,
  idx
}: Props) {

  return (
    <label htmlFor={text}>
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
    </label>
  );
}

const idxLetter = ['A', 'B', 'C', 'D'];