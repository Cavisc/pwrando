import useScrollToBottom from "../../hooks/useScrollToBottom";

import CommandLine from "../CommandLine";
import Info from "../Info";
import History from "../History";

export default function TerminalMain() {
  const scrollRef = useScrollToBottom();

  return (
    <div
      ref={scrollRef}
      className="bg-black rounded-b-lg w-full h-1/2 p-2 opacity-90 overflow-y-scroll break-words text-tertiary text-left scroll-smooth"
    >
      <Info />
      <History />
      <CommandLine />
    </div>
  );
}
