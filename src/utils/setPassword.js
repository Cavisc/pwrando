import encode from "./encode";

export default function setPassword(password) {
  let passwords = [];

  if (sessionStorage.getItem("passwords")) {
    passwords = JSON.parse(sessionStorage.getItem("passwords"));
  }

  passwords.push(encode(password));
  sessionStorage.setItem("passwords", JSON.stringify(passwords));
}
