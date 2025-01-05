import getCommands from "./getCommands";

export default function getLastCommand() {
  const commands = getCommands();
  const lastCommand = commands[commands.length - 1];

  return lastCommand;
}
