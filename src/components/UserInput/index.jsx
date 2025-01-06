import usePersistentFocus from "../../hooks/usePersistentFocus";
import useUserInput from "../../hooks/useUserInput";

export default function UserInput() {
  const { input, handleInputChange, handleKeyDown } = useUserInput();
  const { inputRef, focusInput } = usePersistentFocus();

  return (
    <div
      className="inline cursor-text w-full overflow-hidden"
      onClick={focusInput}
    >
      <span className="whitespace-pre-wrap break-all">{input}</span>
      <input
        ref={inputRef}
        autoFocus={true}
        className="absolute left-0 top-0 w-[1px] h-[1px] opacity-0"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
