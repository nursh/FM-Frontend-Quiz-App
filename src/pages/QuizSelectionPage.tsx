import Option from "@app/components/Option";
import { useContext, useState } from "react";
import { quizzes } from "../../data.json";
import ThemeSwitch from "@app/components/ThemeSwitch";
import { useNavigate } from "react-router";
import { useQuiz } from "@app/context/QuizContext";

export default function QuizSelectionPage() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const topics = quizzes.map(({ title, icon }) => ({ title, icon }));
  const navigate = useNavigate();
  const { setTitle } = useQuiz();

  const onSelectTitle = (title: string) => {
    setSelectedTitle(title);
    setTitle(title);
    navigate(`/FM-Frontend-Quiz-App/${title}/quiz`);
  }

  return (
    <main>
      <header>
        <ThemeSwitch />
      </header>
      <div className="container">
        <section className="flow">
          <h1>
            <span className="normal">Welcome to the</span>
            <span>Frontend Quiz!</span>
          </h1>

          <h2 className="italics normal">Pick a subject to get started</h2>
        </section>
        <div className="radio-group">
          {topics.map(({ title, icon }) => (
            <Option
              text={title}
              name="title"
              key={title}
              onSelect={onSelectTitle}
              selected={selectedTitle}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
