import Option from "@app/components/Option";
import { useState } from "react";
import { quizzes } from "../../data.json";
import { useNavigate } from "react-router";
import { useQuiz } from "@app/context/useQuiz";
import Header from "@app/components/Header";

export default function QuizSelectionPage() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const topics = quizzes.map(({ title, icon }) => ({ title, icon }));
  const navigate = useNavigate();
  const { setTitle } = useQuiz();

  const onSelectTitle = (title: string) => {
    setSelectedTitle(title);
    setTitle(title);
    navigate(`${import.meta.env.BASE_URL}quiz`);
  }

  return (
    <main>
      <Header />
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
