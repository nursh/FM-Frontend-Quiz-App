import Option from "@app/components/Option";
import { useState } from "react";
import { quizzes } from "../../data.json";
import ThemeSwitch from "@app/components/ThemeSwitch";

export default function QuizSelectionPage() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const titles = quizzes.map((quiz) => quiz.title);

  return (
    <>
      <ThemeSwitch />
      <section>
        <h1>
          <span className="normal">Welcome to the</span>
          <br />
          <span>Frontend Quiz!</span>
        </h1>

        <h2 className="italics normal">Pick a subject to get started</h2>
      </section>
      <div className="radio-group">
        {titles.map((title) => (
          <Option
            text={title}
            name="title"
            key={title}
            onSelect={setSelectedTitle}
            selected={selectedTitle}
          />
        ))}
      </div>
    </>
  );
}
