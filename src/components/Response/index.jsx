import handleCommand from "../../utils/handleComand";

export default function Response({ command, encrypt }) {
  const response = handleCommand(command, encrypt);

  return <span className="block whitespace-break-spaces">{response}</span>;
}
