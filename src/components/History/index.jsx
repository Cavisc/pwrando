import useHistory from "../../hooks/useHistory";

import HistoryItem from "../HistoryItem";

export default function History() {
  const history = useHistory();

  return (
    <div>
      {history.map((command, index) => {
        return (
          <HistoryItem
            key={`${command}-${index}`}
            id={index}
            historyLength={history.length}
            command={command}
          />
        );
      })}
    </div>
  );
}
