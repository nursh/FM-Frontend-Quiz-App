import ThemeSwitch from "@app/components/ThemeSwitch";
import { useQuiz } from "@app/context/useQuiz";
import { useResults } from "@app/context/useResults";
import { useNavigate } from "react-router";


export default function QuizResultPage() {

  const navigate = useNavigate();
  const { title } = useQuiz();
  const { results } = useResults();
  const correctAnswers = results.filter(answer => answer).length;

  const handleClick = () => {
    navigate(import.meta.env.BASE_URL);
  }

  return (
    <main>
      <header>
        <ThemeSwitch />
      </header>
      <div>
        <h1>
          <span>Quiz completed</span>
          <span>You scored...</span>
        </h1>
        <div>
          <div>
            <p>{title}</p>
            <p>{correctAnswers}</p>
            <p>out of {results.length}</p>
          </div>
          <button onClick={handleClick}>Play Again</button>
        </div>
      </div>
    </main>
  )
}