// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
//1st we let the user insert the length of the password (make sure to loop the user if they didnt insert length b/8 8 up to 128)
// valadiate for each input of character (lowercase uppercase numeric n special character)the user wants by using conform()
// we created a set of character to save the characted that user wants to include , if yes they will be join into the empty string , if not then no

var passwordLength;
var charset = "";

function getPasswordOptions() {
  passwordLength = parseInt(
    prompt(
      "Please insert the password length,  Ensure it is atleast 8 character but no more than 128",
    ),
  );
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt(
        "Ensure it is atleast 8 character but no more than 128, please re-insert the password length",
      ),
    );
  }
  charset = "";

  let haslowerCase = confirm("would you like to include lowercase character");

  if (haslowerCase) {
    charset += lowerCasedCharacters.join("");
  }
  let hasUpperCase = confirm("would you like to include uppercase character");
  if (hasUpperCase) {
    charset += upperCasedCharacters.join("");
  }
  let hasnumeric = confirm("would you like to include numeric character");
  if (hasnumeric) {
    charset += numericCharacters.join("");
  }
  let hasSpecialCharac = confirm("would you like to include special character");
  if (hasSpecialCharac) {
    charset += specialCharacters.join("");
  }
  generatePassword(); // Generate password after options are set
  // console.log(charset)
}

// Function for getting a random element from the chareset
//we pass in charset to the function as param then created a var that will select a random number which we can use as an index
//this function will return a random character from the charset

function getRandom(charset) {
  // Generate a random index within the length of the array so to return the element at the random index
  var randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

// Function to generate password with user input
//1st we create an empty string to hold the generated password
//2nd we enter a loop until we get the password length requested by the users
//this loop will call the getrandom function and the character that will be selected will get concated into the empty string password
// we created a var called passwordtext to target an HTML element with the ID "password" using the querySelector() method provided by DOM
//then we target the passwordtext value to be the value of the variable password.

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += getRandom(charset);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions(); // Retrieve password options before generating
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
