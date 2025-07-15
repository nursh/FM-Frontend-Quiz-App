type Props = {
  text: string;
  name: string;
  onSelect: (t: string) => void;
  selected: string;
};

export default function Option({ text, name, onSelect, selected }: Props) {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={text}
        onChange={(evt) => onSelect(evt.target.value)}
        checked={selected === text}
        value={text}
      />
      <label htmlFor={text}>{text}</label>
    </>
  );
}
