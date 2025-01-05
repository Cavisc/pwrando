import Prompt from "../Prompt";
import UserInput from "../UserInput";
import Caret from "../Caret";

export default function CommandLine() {
  return (
    <div className="inline">
      <Prompt />
      <UserInput />
      <Caret />
    </div>
  );
}
