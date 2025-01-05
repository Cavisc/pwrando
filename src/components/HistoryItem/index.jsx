import Prompt from "../Prompt";
import Response from "../Response";

export default function HistoryItem({ command, id, historyLength }) {
  return (
    <div>
      <Prompt />
      <span className="text-tertiary">{command}</span>
      {command.includes("generate") || command.includes("see") ? (
        <Response
          key={id}
          command={command}
          encrypt={id !== historyLength - 1}
        />
      ) : (
        <Response key={id} command={command} />
      )}
    </div>
  );
}
