import { quizzes } from '../../data.json';
import QuestionView from "@app/components/QuestionView";
import { useQuiz } from "@app/context/useQuiz";


export default function QuizPage() {

  const { title } = useQuiz();
  const quizIndex = quizzes.findIndex(quiz => quiz.title === title);
  const {
    questions,
  } = quizzes[quizIndex];

  return (
    <main>
      <QuestionView questions={questions} />
    </main>
  )
}