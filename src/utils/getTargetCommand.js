export default function getTargetCommand(index, key) {
  let commands = [];
  let targetCommand = { command: "", index };

  if (sessionStorage.getItem("commands")) {
    commands = JSON.parse(sessionStorage.getItem("commands"));

    if (key === "ArrowUp" && index > 0) {
      targetCommand.index--;
    } else if (key === "ArrowDown" && index < commands.length) {
      targetCommand.index++;
    }

    targetCommand.command = commands[targetCommand.index] || "";
  }

  return targetCommand;
}
