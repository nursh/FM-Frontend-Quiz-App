import { getImageBg } from "@app/utils/getImageBg";

type Props = {
  text: string;
  name: string;
  onSelect: (t: string) => void;
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
  function getImageUrl(imagePath: string) {
    const cleanPath = imagePath.replace(/\./, "..");
    return new URL(cleanPath, import.meta.url).href;
  }

  return (
    <label htmlFor={text}>
      {icon ? (
        <div className={`icon-bg ${getImageBg(icon)}`}>
          <img src={getImageUrl(icon)} />
        </div>
      ) : undefined}
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
