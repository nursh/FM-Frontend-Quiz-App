import ThemeSwitch from "@app/components/ThemeSwitch";
import { useNavigate } from "react-router";


export default function QuizResultPage() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/FM-Frontend-Quiz-App');
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
          <button onClick={handleClick}>Play Again</button>
        </div>
      </div>
    </main>
  )
}