// Assignment code here

// first I defined my constants
  
  // Get references to the #generate element
  
  var generateBtn = document.querySelector("#generate");
  
  //then I defined generatePassword as its own function.
  
  
  function generatePassword() {
    var passwordCharSet = "";
  
    //I decided to leave length up to the user but requested 8 to 128 characters specifically. User can input more or less if desired.
  
    var length = window.prompt("Enter a number from 8 to 128 for password length.");
    var lengthnum = parseInt(length);

    if (lengthnum >= 8 && lengthnum <= 128) {
    //Answers to the below prompts will determine whether or not to use specified characters. 
    
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      passwordCharSet += 'qwertyuiopasdfghjklzxcvbnm';
    };
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    };
  
    var symbols = window.confirm("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += '!@#$~`%^&*()_+{}[]-=';
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += '1234567890';
    };
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password; }

    else alert("Invalid Entry!");
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  passwordText.removeEventListener("load", writePassword);