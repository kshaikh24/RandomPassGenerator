// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
    var error = true;
    while (error) {
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Please input a number between 8 and 128.");
        passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
      } else {
        error = false;
        var charType = [{
          type: "special characters",
          character: specialCharacters,
          incl_char_type: false
        },
        {
          type: "numeric characters",
          character: numericCharacters,
          incl_char_type: false
        },
        {
          type: "lowercase characters",
          character: lowerCasedCharacters,
          incl_char_type: false
        },
        {
          type: "uppercase characters",
          character: upperCasedCharacters,
          incl_char_type: false
        }];
        var charCheck = false;
        while (!charCheck) {
          for (let i = 0; i < charType.length; i++) { // asks the questions
            charType[i].incl_char_type = confirm("Would you like to include " + charType[i].type + "?");
          };
          for (let i = 0; i < charType.length; i++) { // checks if any say yes
            if (charType[i].incl_char_type === true) {
              charCheck = true;
            }
          };
          if (!charCheck) {
            alert("You need at least one character type!.");
          }
        }
        return {
          password_length: passwordLength,
          char_types: charType
        };
      }
    }
    // var passwordCharacters = [passwordLength];
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var passwordOptions = getPasswordOptions();

  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);


//  Pseudo code for password generator:
//  User Clicks Button
//  "How many characters would you like your password to have? >passwordLength"
//  Person enters <8 "YOU HAVE TOO FEW CHARACTERS" > Alert
//  Person adds >128 "YOU HAVE TOO MANY CHARACTERS" > Alert
//  Would you like to include specialCharacters? Y/N > Confirm
//  Would you like to include numericCharacters? Y/N  > Confirm
//  Would you like to include lowercaseCharacters? Y/N  > Confirm
//  Would you like to include UpperCasedCharacters? Y/N  > Confirm
//  If all are false, Alert "You need at least one character type!"
// 



