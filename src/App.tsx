import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import QuizSelectionPage from "./pages/QuizSelectionPage";

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
