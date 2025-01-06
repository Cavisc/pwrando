import { useRef } from "react";
import useUserInput from "../../hooks/useUserInput";

export default function UserInput() {
  const { input, handleInputChange, handleKeyDown } = useUserInput();
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="inline cursor-text" onClick={focusInput}>
      <span className="whitespace-pre-wrap">{input}</span>
      <input
        ref={inputRef}
        autoFocus={true}
        className="absolute opacity-0"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
