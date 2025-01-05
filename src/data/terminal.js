export const terminalHeader = "pwrando@pwrando-terminal:";
export const pathChar = "~";
export const permission = "$";
export const commands = [
  {
    command: "help",
    description: 'Type "help" to see available commands.',
  },
  {
    command: "clear",
    description: 'Type "clear" to clear the terminal.',
  },
  {
    command: "generate",
    description: `Type "generate" to generate a password.
  
  OPTIONAL:
    "[4-100]": password length (default is 8)
    "-c": include capital letters in the password
    "-n": include numbers in the password
    "-s": include symbols in the password
    
  EXAMPLES: 
    generate              # 8-character password
    generate 32 -c -n -s  # 32-character password with capital letters, numbers and symbols
    generate 4 -c -s      # 4-character password with capital letters and symbols
    generate 100 -n -s    # 100-character password with numbers and symbols
      `,
  },
  {
    command: "about",
    description: 'Type "about" to display information about the terminal.',
    response: `This is a PASSWORD GENERATOR.

ATTENTION:
  The passwords generated here are temporarily stored in the session storage
  of your browser for ease of use. Please handle these passwords carefully 
  and avoid using this tool on public or shared devices to protect your information.`,
  },
  {
    command: "see",
    description: 'Type "see" to display passwords generated in this session.',
  },
];
export const info = commands[0].description;
export const encrypted = "########";