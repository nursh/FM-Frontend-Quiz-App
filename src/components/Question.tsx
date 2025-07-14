

type Props = {
  question: string;
}

export default function Question({ question }: Props) {

  return (
    <p>{question}</p>
  )
}