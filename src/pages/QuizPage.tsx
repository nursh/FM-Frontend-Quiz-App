import ThemeSwitch from "@app/components/ThemeSwitch";
import { useParams } from "react-router";


type ParamsProps = {
  title: string;
}
export default function QuizPage() {

  const { title } = useParams<ParamsProps>();

  return (
    <main>
      <header>
        {title}
        <ThemeSwitch /> 
      </header>
    </main>
  )
}