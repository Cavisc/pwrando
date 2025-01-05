import { useState, useEffect } from "react";

export default function Caret() {
  const [display, setDisplay] = useState("hidden");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prevDisplay) =>
        prevDisplay === "inline" ? "hidden" : "inline"
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span className={`bg-tertiary ${display}`}>&nbsp;</span>;
}
