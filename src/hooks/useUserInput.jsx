import { useState } from "react";
import validateChar from "../utils/validateChar";
import setCommand from "../utils/setCommand";
import getTargetCommand from "../utils/getTargetCommand";
import getCommands from "../utils/getCommands";
import Emitter from "../utils/Emitter";

export default function useUserInput() {
  const [input, setInput] = useState("");
  const [commandIndex, setCommandIndex] = useState(getCommands().length);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    if (validateChar(lastChar)) {
      setInput(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter" && input !== "") {
      setCommand(input);
      setInput("");

      Emitter("historyUpdate");
      setCommandIndex(getCommands().length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const response = getTargetCommand(commandIndex, e.key);
      setCommandIndex(response.index);
      setInput(response.command);
    }
  };

  return {
    input,
    setInput,
    handleInputChange,
    handleKeyDown,
  };
}