import setPassword from "./setPassword";

import { lettersLower, lettersUpper, numbers, symbols } from "../data/password";
import { encrypted, info } from "../data/terminal";

export default function generatePassword(params, encrypt) {
  let chars = lettersLower;
  let length = 8;
  let password = "";
  let invalidParam;
  let validParams = true;

  while (params.length >= 1 && validParams) {
    let param = params.shift();

    if (!isNaN(param)) {
      length = parseInt(param, 10);

      if (length < 4 || length > 100) {
        validParams = false;
        invalidParam = param;
      }
    } else {
      switch (param) {
        case "-c":
          chars += lettersUpper;
          break;
        case "-n":
          chars += numbers;
          break;
        case "-s":
          chars += symbols;
          break;
        default:
          validParams = false;
          invalidParam = param;
          break;
      }
    }
  }

  if (validParams) {
    if (!encrypt) {
      const indexes = new Uint32Array(length);
      window.crypto.getRandomValues(indexes);

      for (let i = 0; i < length; i++) {
        password += chars[indexes[i] % chars.length];
      }

      setPassword(password);
    } else {
      password = encrypted;
    }
  } else {
    password = `ERROR: "${invalidParam}" is a invalid parameter! ${info}`;
  }

  return password;
}
