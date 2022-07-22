// Assignment code here

// first I defined my constants

const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  password.addEventListener("click")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//then I defined generatePassword as its own function.

function generatePassword() {
  var passwordCharSet = "";

  //I decided to leave length up to the user but requested 8 to 128 characters specifically. User can input more or less if desired.

  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  //Answers to the below prompts will determine whether or not to use specified characters. 
  
  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

// Write password to the #password input

// Add event listener to generate button