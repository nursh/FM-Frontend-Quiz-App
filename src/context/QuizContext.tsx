import { createContext, useContext, useState } from "react";

type QuizContextProps = {
  title: string;
  setTitle: ((title: string) => void) | null;
}

const QuizContext = createContext<QuizContextProps>({
  title: "",
  setTitle: null
});


export function QuizContextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");

  return (
    <QuizContext value={{ title, setTitle }}>
      {children}
    </QuizContext>
  )
}

export function useQuiz() {
  const { title, setTitle } = useContext(QuizContext);
  if (!setTitle) throw new Error("The function for updating quiz title is missing.");
  return { title, setTitle };
}

