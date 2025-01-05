import { pathChar, terminalHeader } from "../../data/terminal";

export default function TerminalHeader() {
  return (
    <div className="bg-black rounded-t-lg flex items-center justify-center w-full py-4 text-center">
      <span className="text-tertiary select-none font-normal">{terminalHeader+pathChar}</span>
    </div>
  );
}
