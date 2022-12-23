// Assignment Code

//  This is my psuedoscode
// 1. Prompt the user for the password criteria
//    a. password length has to be between 8-128
//         a. use the prompt for the user to select a number between 8-128
//         b. must assign variables
//    b. Lowercase, uppercase, number, & special Characters(these are my variables)
//         a.use confirm to ask them to press ok if they want special characters if not press cancel
//         b.use confirm to ask them to press ok if they want numbers if not press cancel
//         c.use confirm to ask them to press ok if they want upper case letters if not press cancel
//         d.use confirm to ask them to press ok if they want lowercase letters if not press cancel
// 2. Validate the input
// 3. Generate password with the criteria that is selected
// 4. Display generated password to page
//     a.which is done with return like down there


var generateBtn = document.querySelector("#generate");

// Need to identify variables

// Assigned variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var chosenCharacter = [];

// created "function generatePassword" to define generatePassword and used return to give it value.
// any time you created a variable because you plan on using it
function generatePassword() {
  console.log("Generated button has been clicked!");
  
  var result = [];

  var possiblePassword = [];

  // add a prompt for a user to be able to input the amount of characters they need
  var length = prompt(
    "How many characters would you like to have for your password? (Choose between 8 to 128)"
  );

  // add if to alert the user to enter the correct number
  if (isNaN(length) || length < 8 || length > 128) {
    alert("You must enter a number between 8 to 128 characters.");
    generatePassword();
  }


  var hasUpperCase = confirm("Would you like upper case letters?");
  console.log(hasUpperCase);

  var hasLowerCase = confirm("Would you like lower case letters?");
  console.log(hasLowerCase);

  var hasNumbers = confirm("Would you like numbers?");
  console.log(hasNumbers);

  var hasSpecialCharacters = confirm("Would you  like special characters?");
  console.log(hasSpecialCharacters);


  if (hasUpperCase === true) {
    upperCase = Array.from(upperCase);
    for (let i = 0; i < length; i++) {
      var randIndex = Math.floor(Math.random() * upperCase.length);
      var randChar = upperCase[randIndex];
      possiblePassword.push(randChar);
      console.log(randChar);
    }
  }

  if (hasLowerCase === true) {
    lowerCase = Array.from(lowerCase);
    for (let i = 0; i < length; i++) {
      var randIndex = Math.floor(Math.random() * lowerCase.length);
      var randChar = lowerCase[randIndex];
      possiblePassword.push(randChar);
    }
  }

  if (hasNumbers === true) {
    number = Array.from(number);
    for (let i = 0; i < length; i++) {
      var randIndex = Math.floor(Math.random() * number.length);
      var randChar = number[randIndex];
      possiblePassword.push(randChar);
    }
  }

  if (hasSpecialCharacters === true) {
    specialCharacters = Array.from(specialCharacters);
    for (let i = 0; i < length; i++) {
      var randIndex = Math.floor(Math.random() * specialCharacters.length);
      var randChar = specialCharacters[randIndex];
      possiblePassword.push(randChar);
    }
  }

  for (var i = 0; i < length; i++) {
    // choose possible character at random and add it too password until you reach the desire password length
    var randIndex = Math.floor(Math.random() * possiblePassword.length);
    var randChar = possiblePassword[randIndex];
    result.push(randChar);
  }

  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
