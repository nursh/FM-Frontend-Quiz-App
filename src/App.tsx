import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import QuizResultPage from "./pages/QuizResultPage";
import { QuizContextProvider, ResultContext } from "./context/QuizContext";

const QuizSelectionPage = lazy(() => import("./pages/QuizSelectionPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function App() {
  useEffect(() => {
    document.title = "Frontend Quiz App";
  }, []);

  return (
    <Routes>
      <Route path="FM-Frontend-Quiz-App">
        <QuizContextProvider>
          <Route index element={<QuizSelectionPage />} />
          <ResultContext value={[]}>
            <Route path=":title/quiz" element={<QuizPage />} />
            <Route path="results" element={<QuizResultPage />} />
          </ResultContext>
        </QuizContextProvider>
      </Route>
    </Routes>
  );
}

export default App;
