import { commands, encrypted } from "../data/terminal";
import generatePassword from "./generatePassword";
import getPasswords from "./getPasswords";

export default function handleCommand(command, encrypt) {
  let splittedCommand = command.split(" ");
  let mainCommand = splittedCommand.shift();
  let params = [];

  if (splittedCommand.length >= 1) {
    params = splittedCommand;
  }

  const correctCommand = commands.find((cmd) => cmd.command === mainCommand);
  let response;

  if (correctCommand) {
    switch (correctCommand.command) {
      case "help":
        response = commands.map((cmd) => cmd.description).join("\n");
        break;
      case "generate":
        response = generatePassword(params, encrypt);
        break;
      case "see":
        const pws = getPasswords();
        response = encrypt && pws.length > 0 ? encrypted : pws;
        break;
      default:
        response = correctCommand.response;
        break;
    }
  } else response = `${command}: command not found.`;

  return response;
}
