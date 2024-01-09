//  Pseudo code for password generator:
//  User Clicks Button
//  "How many characters would you like your password to have? >passwordLength"
// if Person enters <8 "YOU HAVE TOO FEW CHARACTERS" > Alert
// else if Person adds >128 "YOU HAVE TOO MANY CHARACTERS" > Alert
//  Would you like to include specialCharacters? T/F > Confirm
//  Would you like to include numericCharacters? T/F  > Confirm
//  Would you like to include lowercaseCharacters? T/F  > Confirm
//  Would you like to include UpperCasedCharacters? T/F  > Confirm
//  If all are false, Alert "You need at least one character type!"
//  Generate random password using user selected character types
// If include character
//  Create a for loop using passwordLength and Math.random to generate password
//  Return the generated password


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
  var passwordLength = prompt("How many characters would you like your password to have? (8-128 Characters)");

  if (passwordLength < 8) {
    alert("TOO FEW CHARACTERS! (8-128 Characters) ");
    return;
  } else if (passwordLength > 128) {
    alert("TOO MANY CHARACTERS! (8-128 Characters)");
    return;
  }

  var includeSpecialCharacters = confirm("Would you like to include Special characters? (!@£$%)") ? true : false;
  
  var includeNumericCharacters = confirm("Would you like to include Numeric characters? (12345)") ? true : false;

  var includeLowerCasedCharacters = confirm("Would you like to include Lowercase characters? (abcde)") ? true : false;

  var includeUpperCasedCharacters = confirm("Would you like to include Uppercase characters? (ABCDE") ? true : false;
  
  if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowercaseCharacters && !includeUppercaseCharacters) {
    alert("You need to select at least one character type!");
    return;
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







