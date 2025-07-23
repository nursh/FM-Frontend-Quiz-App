import { quizzes } from '../../data.json';
import QuestionView from "@app/components/QuestionView";
import { useQuiz } from "@app/context/useQuiz";
import Header from "@app/components/Header";


export default function QuizPage() {

  const { title } = useQuiz();
  const quizIndex = quizzes.findIndex(quiz => quiz.title === title);
  const {
    icon,
    questions,
  } = quizzes[quizIndex];

  return (
    <main>
      <Header title={title} icon={icon} />
      <QuestionView questions={questions} />
    </main>
  )
}