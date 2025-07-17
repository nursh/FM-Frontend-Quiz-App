import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

 
const QuizSelectionPage = lazy(() => import("./pages/QuizSelectionPage"));

function App() {
  useEffect(() => {
    document.title = "Frontend Quiz App";
  }, []);


  return (
    <Routes>
      <Route path="FM-Frontend-Quiz-App">
        <Route index element={<QuizSelectionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
