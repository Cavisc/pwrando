import useUserInput from "../../hooks/useUserInput";

export default function UserInput() {
  const { input } = useUserInput();

  return (
    <div className="inline">
      <span className="whitespace-pre-wrap">{input}</span>
      <input autoFocus className="invisible w-0" />
    </div>
  );  
}
