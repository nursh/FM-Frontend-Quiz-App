import ThemeSwitch from "@app/components/ThemeSwitch";
import { useParams } from "react-router";
import { quizzes } from '../../data.json';
import Icon from "@app/components/Icon";
import QuestionView from "@app/components/QuestionView";

type ParamsProps = {
  title: string;
}

export default function QuizPage() {

  const { title } = useParams<ParamsProps>();
  const quizIndex = quizzes.findIndex(quiz => quiz.title === title);
  const {
    icon,
    questions,
  } = quizzes[quizIndex];

  return (
    <main>
      <header>
        <Icon iconPath={icon} />
        {title}
        <ThemeSwitch /> 
      </header>
      <div>
        <QuestionView questions={questions} />
      </div>
    </main>
  )
}