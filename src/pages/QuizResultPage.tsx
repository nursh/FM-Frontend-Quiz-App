import Icon from "@app/components/Icon";
import ThemeSwitch from "@app/components/ThemeSwitch";
import { useQuiz } from "@app/context/useQuiz";
import { useResults } from "@app/context/useResults";
import { useNavigate } from "react-router";
import { quizzes } from "../../data.json";
import '@app/styles/Results.css';

export default function QuizResultPage() {
  const navigate = useNavigate();
  const { title } = useQuiz();
  const quizIndex = quizzes.findIndex((quiz) => quiz.title === title);
  const { icon } = quizzes[quizIndex];
  const { results, setResults } = useResults();
  const correctAnswers = results.filter((answer) => answer).length;

  const handleClick = () => {
    setResults([]);
    navigate(import.meta.env.BASE_URL);
  };

  return (
    <main>
      <header>
        <Icon iconPath={icon} />
        {title}
        <ThemeSwitch />
      </header>
      <div className="container">
        <h1>
          <span className="normal">Quiz completed</span>
          <span>You scored...</span>
        </h1>
        <div className="flow">
          <div className="results flow">
            <div className="row">
              <Icon iconPath={icon} />
              <p>{title}</p>
            </div>
            <p className="quiz-score">{correctAnswers}</p>
            <p className="quiz-length">out of {results.length}</p>
          </div>
          <button onClick={handleClick}>Play Again</button>
        </div>
      </div>
    </main>
  );
}
