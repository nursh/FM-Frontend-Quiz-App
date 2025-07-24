import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./styles/App.css";
import QuizResultPage from "./pages/QuizResultPage";
import QuizContextProvider from "./context/QuizContext";
import ResultContextProvider from "./context/ResultContext";
import Header from "./components/Header";

const QuizSelectionPage = lazy(() => import("./pages/QuizSelectionPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function App() {
  useEffect(() => {
    document.title = "Frontend Quiz App";
  }, []);

  return (
    <QuizContextProvider>
      <Header />
      <ResultContextProvider>
        <Routes>
          <Route path="FM-Frontend-Quiz-App">
            <Route index element={<QuizSelectionPage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="results" element={<QuizResultPage />} />
          </Route>
        </Routes>
      </ResultContextProvider>
    </QuizContextProvider>
  );
}

export default App;
