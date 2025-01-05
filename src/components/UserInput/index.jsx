import useUserInput from "../../hooks/useUserInput";

export default function UserInput() {
  const { input } = useUserInput();

  return <span className="whitespace-pre-wrap">{input}</span>;
}
