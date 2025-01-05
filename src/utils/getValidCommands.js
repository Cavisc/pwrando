import getCommands from "./getCommands";

export default function getValidCommands() {
  const commands = getCommands();
  const validCommands = commands.slice(commands.lastIndexOf("clear") + 1);

  return validCommands;
}
