import Option from "@app/components/Option";
import { useState } from "react";
import { quizzes } from "../../data.json";
import ThemeSwitch from "@app/components/ThemeSwitch";

export default function QuizSelectionPage() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const topics = quizzes.map(({ title, icon }) => ({ title, icon }));

  return (
    <main>
      <header>
        <ThemeSwitch />
      </header>
      <section>
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
            onSelect={setSelectedTitle}
            selected={selectedTitle}
            icon={icon}
          />
        ))}
      </div>
    </main>
  );
}
