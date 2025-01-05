import { useState, useEffect, useRef } from "react";

import validateChar from "../utils/validateChar";
import setCommand from "../utils/setCommand";
import getTargetCommand from "../utils/getTargetCommand";
import getCommands from "../utils/getCommands";
import Emitter from "../utils/Emitter";

export default function useUserInput() {
  const [input, setInput] = useState("");
  const [commandIndex, setCommandIndex] = useState(getCommands().length);
  const inputRef = useRef(input);
  const commandIndexRef = useRef(commandIndex);

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  useEffect(() => {
    commandIndexRef.current = commandIndex;
  }, [commandIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (validateChar(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter" && inputRef.current !== "") {
        setCommand(inputRef.current);
        setInput("");

        Emitter("historyUpdate");
        setCommandIndex(getCommands().length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const response = getTargetCommand(commandIndexRef.current, e.key);
        setCommandIndex(response.index);
        setInput(response.command);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { input, setInput };
}
