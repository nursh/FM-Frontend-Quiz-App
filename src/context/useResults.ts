import { useContext } from "react";
import { ResultContext } from "./ResultContext";

export function useResults() {
  const { results, setResults } = useContext(ResultContext);
  if (!setResults) throw new Error("The function for updating results is missing.")
  return { results, setResults };
}