// Removed keystring constants
  
  // References Generate Element
  
  var generateBtn = document.querySelector('#generate');
  
  //I defined generatePassword as its own function.
  
  //I defined generatePassword as an event as well in order to use Event.preventDefault in order to fix 'undefined' error message in code
  function generatePassword(event) {
    var passwordCharSet = '';
  
    //User is asked to input 8 to 128 characters.
  
    var length = window.prompt('Enter a number from 8 to 128 for password length.');

    // I used parseInt to convert the answer of the prompt from a string into an integer
    var lengthnum = parseInt(length);

    //I used an if statement that checks whether the user input is between 8 and 128. If not, the code will default to the else at the bottom of the function.
    if (lengthnum >= 8 && lengthnum <= 128) {
    //Answers to the below prompts will determine whether or not to use specified characters. 
    
    var lowercase = window.confirm('Click OK to use lowercase letters, or Cancel to not use lowercase letters');
    if (lowercase) {
      passwordCharSet += 'qwertyuiopasdfghjklzxcvbnm';
    };
  
    var uppercase = window.confirm('Click OK to use uppercase letters, or Cancel to not use uppercase letters');
    if (uppercase) {
      passwordCharSet += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    };
  
    var symbols = window.confirm('Click OK to use symbols, or Cancel to not use symbols');
    if (symbols) {
      passwordCharSet += '!@#$~`%^&*()_+{}[]-=';
    };
  
    var numbers = window.confirm('Click OK to use numbers, or Cancel to not use numbers');
    if (numbers) {
      passwordCharSet += '1234567890';
    };
    var password = '';
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }

    //added if statement if all entries are null to alert the user and run Event.preventDefault to prevent undefined error message
    if (numbers === null && symbols === null && uppercase === null && lowercase === null) {
      alert('Invalid Entry!');
      Event.preventDefault(generatePassword);
    }

    else
    
    return password; }

    else alert('Invalid Entry!');
    Event.preventDefault(generatePassword)
  }
  
  // This is the function that occurs when the user clicks the button
  // First it defines var 'password' as the result of the generatePassword function
  // Then it displays the value of that generatePassword function into the area defined with id #password
  function writePassword() {
    var password = generatePassword();
    document.querySelector('#password').value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);

  // Removed event listener to prevent function from running on page load
  removeEventListener('load', writePassword);