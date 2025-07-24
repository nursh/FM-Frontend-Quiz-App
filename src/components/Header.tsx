import { useQuiz } from "@app/context/useQuiz";
import Icon from "./Icon";
import ThemeSwitch from "./ThemeSwitch";
import { quizzes } from '../../data.json';
import '@app/styles/Header.css';


export default function Header() {

  const { title } = useQuiz();
  let icon = '';

  if (title) {
    const quiz = quizzes.find(quiz => quiz.title === title);
    icon = quiz ? quiz.icon : '';
  }

  return (
    <header className="row">
      {icon
      ? <div className="quiz-title">
          <Icon iconPath={icon} />
          <p>{title}</p>
        </div>
      : undefined}
      <div style={title ? undefined : { marginLeft: 'auto' }}>
        <ThemeSwitch />
      </div>
    </header>
  )
}