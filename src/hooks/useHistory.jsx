import { useEffect, useState } from "react";
import getValidCommands from "../utils/getValidCommands";
import getLastCommand from "../utils/getLastCommand";

export default function useHistory() {
  const [history, setHistory] = useState(getValidCommands());

  useEffect(() => {
    const handleHistory = () => {
      const lastCommand = getLastCommand();

      lastCommand === "clear"
        ? setHistory([])
        : setHistory((prevHistory) => [...prevHistory, lastCommand]);
    };

    window.addEventListener("historyUpdate", handleHistory);
    return () => {
      window.removeEventListener("historyUpdate", handleHistory);
    };
  }, []);

  return history;
}
