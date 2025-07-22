import { QuizContext } from './QuizContext';
import { useContext } from "react";

export function useQuiz() {
  const { title, setTitle } = useContext(QuizContext);
  if (!setTitle) throw new Error("The function for updating quiz title is missing.");
  return { title, setTitle };
}