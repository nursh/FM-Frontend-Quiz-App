import { createContext, useContext, useState } from "react";

type ResultContextProps = {
  results: boolean[];
  setResults: ((results: boolean[]) => void) | null;
}

const ResultContext = createContext<ResultContextProps>({
  results: [],
  setResults: null
});


export function ResultContextProvider({ children }: { children: React.ReactNode }) {

  const [results, setResults] = useState<boolean[]>([]);

  return (
    <ResultContext value={{ results, setResults }}>
      {children}
    </ResultContext>
  )
}

export function useResult() {
  const { results, setResults } = useContext(ResultContext);
  if (!setResults) throw new Error("The function for updating results is missing.")
  return { results, setResults };
}