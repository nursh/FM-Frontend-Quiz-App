import { useEffect } from 'react';
import './App.css'
import ThemeSwitch from './components/ThemeSwitch';

function App() {

  useEffect(() => {
    document.title = 'Frontend Quiz App';
  }, []);

  return (
    <div>
      <ThemeSwitch />
       <h1>
        <span>Welcome to the</span><br />
        <span>Frontend Quiz!</span>
       </h1>

       <h2>Pick a subject to get started</h2>
    </div>
  )
}

export default App
