

type Props = {
  text: string;
  name: string;
}

export default function Option({ text, name }: Props) {

  return (
    <>
      <input type="radio" name={name} id={text} />
      <label htmlFor={text}>{text}</label>
    </>
  )
}