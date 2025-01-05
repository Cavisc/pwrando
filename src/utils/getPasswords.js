import decode from "./decode";

export default function getPasswords() {
  let passwords = [];

  if (sessionStorage.getItem("passwords")) {
    passwords = JSON.parse(sessionStorage.getItem("passwords"));
  }

  return passwords.map(decode).join("\n");
}
