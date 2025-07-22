import { createContext, useState } from "react";

type QuizContextProps = {
  title: string;
  setTitle: ((title: string) => void) | null;
}

export const QuizContext = createContext<QuizContextProps>({
  title: "",
  setTitle: null
});


export default function QuizContextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");

  return (
    <QuizContext value={{ title, setTitle }}>
      {children}
    </QuizContext>
  )
}

