import { permission, pathChar, terminalHeader } from "../../data/terminal";

export default function Prompt() {
  return (
    <div className="mr-1 inline-block select-none">
      <span className="text-primary">{terminalHeader}</span>
      <span className="text-quaternary">{pathChar}</span>
      <span className="text-tertiary">{permission}</span>
    </div>
  );
}
