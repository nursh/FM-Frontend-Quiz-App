import Option from "@app/components/Option";
import { useState } from "react";

type Props = {
  titles: string[];
};

export default function QuizSelectionPage({ titles }: Props) {
  const [selectedTitle, setSelectedTitle] = useState("");

  return (
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
  );
}
