export default function setCommand(command) {
  let commands = [];

  if (sessionStorage.getItem("commands")) {
    commands = JSON.parse(sessionStorage.getItem("commands"));
  }

  commands.push(command);
  sessionStorage.setItem("commands", JSON.stringify(commands));
}
