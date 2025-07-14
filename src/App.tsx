import { useEffect } from "react";
import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  useEffect(() => {
    document.title = "Frontend Quiz App";
  }, []);

  return (
    <div>
      <ThemeSwitch />
      <main>
        <section>
          <h1>
            <span className="normal">Welcome to the</span>
            <br />
            <span>Frontend Quiz!</span>
          </h1>

          <h2 className="italics normal">Pick a subject to get started</h2>
        </section>
        
        <section>

        </section>
      </main>
    </div>
  );
}

export default App;
