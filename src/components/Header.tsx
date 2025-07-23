import Icon from "./Icon";
import ThemeSwitch from "./ThemeSwitch";
import '@app/styles/Header.css';


type Props = {
  title?: string;
  icon?: string;
}

export default function Header({ title, icon }: Props) {

  return (
    <header className="row">
      {icon
      ? <div className="quiz-title">
          <Icon iconPath={icon} />
          <p>{title}</p>
        </div>
      : undefined}
      <ThemeSwitch />
    </header>
  )
}