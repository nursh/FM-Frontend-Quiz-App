import ThemeSwitch from "@app/components/ThemeSwitch";
import { quizzes } from '../../data.json';
import Icon from "@app/components/Icon";
import QuestionView from "@app/components/QuestionView";
import { useQuiz } from "@app/context/useQuiz";


export default function QuizPage() {

  const { title } = useQuiz();
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
      <QuestionView questions={questions} />
    </main>
  )
}