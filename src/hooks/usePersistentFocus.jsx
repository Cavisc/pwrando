import { useEffect, useRef } from "react";

export default function usePersistentFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    const ensureFocus = () => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    };

    const intervalId = setInterval(ensureFocus, 100);
    return () => clearInterval(intervalId);
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return { inputRef, focusInput };
}