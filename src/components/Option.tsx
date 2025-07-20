import Icon from "./Icon";

type Props = {
  text: string;
  name: string;
  onSelect: (title: string) => void;
  selected: string;
  icon?: string;
};

export default function Option({
  text,
  name,
  onSelect,
  selected,
  icon,
}: Props) {
  return (
    <label htmlFor={text}>
      {icon ? <Icon iconPath={icon} /> : undefined}
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
