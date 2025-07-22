import { createContext, useState } from "react";

type ResultContextProps = {
  results: boolean[];
  setResults: ((results: boolean[]) => void) | null;
}

export const ResultContext = createContext<ResultContextProps>({
  results: [],
  setResults: null
});


export default function ResultContextProvider({ children }: { children: React.ReactNode }) {

  const [results, setResults] = useState<boolean[]>([]);

  return (
    <ResultContext value={{ results, setResults }}>
      {children}
    </ResultContext>
  )
}

