export default function validateChar(char) {
  return /^[a-zA-Z0-9\s.,?!]$/.test(char) || char === "-";
}
