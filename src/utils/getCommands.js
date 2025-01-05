export default function getCommands() {
  let commands = [];

  if (sessionStorage.getItem("commands")) {
    commands = JSON.parse(sessionStorage.getItem("commands"));
  }

  return commands;
}
