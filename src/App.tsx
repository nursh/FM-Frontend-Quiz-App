import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import QuizResultPage from "./pages/QuizResultPage";

 
const QuizSelectionPage = lazy(() => import("./pages/QuizSelectionPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function App() {
  useEffect(() => {
    document.title = "Frontend Quiz App";
  }, []);


  return (
    <Routes>
      <Route path="FM-Frontend-Quiz-App">
        <Route index element={<QuizSelectionPage />} />
        <Route path=":title/quiz" element={<QuizPage />} />
        <Route path="results" element={<QuizResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
