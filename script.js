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
// created the variable upperCase and gave it value with the upper case alphabet string which i will change with array.from to save time
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// created the variable lowerCase and gave it value with the lower case alphabet string which i will change with array.from to save time
var number = "0123456789";
// created the variable number and gave it value with the number string from 0-9 which i will change with array.from to save time
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// created the variable specialCharacters and gave it value with the special characters string which i will change with array.from to save time
var chosenCharacter = [];
// created a variable chosenCharacter with a value of nothing yet to be able to connect them to other variables with the value of characters

// created "function generatePassword" to define generatePassword and used return to give it value.
// any time you created a variable because you plan on using it
function generatePassword() {
  console.log("Generated button has been clicked!");
  // used console.log to check that the button is workign correctly

  var result = [];
// created a variable result to connect everything together and be displayed on the screen for the intended users

  var possiblePassword = [];
  // created a variable possiblePassword to connect chosenCharacters to result

  // add a prompt for a user to be able to input the amount of characters they need
  var length = prompt(
    "How many characters would you like to have for your password? (Choose between 8 to 128)"
  );
  // created the var length to connect it to the prompt for the user to type their input of 8 to 128 for how many characters they want their password to be

  // add if to alert the user to enter the correct number
  if (isNaN(length) || length < 8 || length > 128) {
    // used a conditional statement to alert the user they typed the wrong input whether it is a letter, less then 8, or more than 128
    alert("You must enter a number between 8 to 128 characters.");
    generatePassword();
  }


  var hasUpperCase = confirm("Would you like upper case letters?");
  console.log(hasUpperCase);
  // needed to create hasUpperCase variable to confirm wether or not they want this character

  var hasLowerCase = confirm("Would you like lower case letters?");
  console.log(hasLowerCase);
  // needed to create hasLowerCase variable to confirm wether or not they want this character

  var hasNumbers = confirm("Would you like numbers?");
  console.log(hasNumbers);
  // needed to create hasNumbers variable to confirm wether or not they want this character

  var hasSpecialCharacters = confirm("Would you  like special characters?");
  console.log(hasSpecialCharacters);
  // needed to create hasSpecialCharacters variable to confirm wether or not they want this character


  if (hasUpperCase === true) {
    // created a conditional statement to give hasUpperCAse confirm prompt a boolean if it equals true it connects upperCase to hasUpperCase
    upperCase = Array.from(upperCase);
    // the Array.from makes upperCase turn from a string to an array.
    for (let i = 0; i < length; i++) {
      // the for loop was to create something like i to measure the length and where to start and pick from
      var randIndex = Math.floor(Math.random() * upperCase.length);
      // used the variable randIndex to connect the Math.floor and Math.random to pick random character from upperCase using the index random pick with Math.random
      var randChar = upperCase[randIndex];
      // used the variable randChar to grab the randIndex from upperCase
      possiblePassword.push(randChar);
      // used possiblePassword to grab the value of randChar to put the random character in the possiblities of password characters
    }
  }

  if (hasLowerCase === true) {
    lowerCase = Array.from(lowerCase);
    // the Array.from makes lowerCase turn from a string to an array.
    for (let i = 0; i < length; i++) {
      // the for loop was to create something like i to measure the length and where to start and pick from
      var randIndex = Math.floor(Math.random() * lowerCase.length);
      // used the variable randIndex to connect the Math.floor and Math.random to pick random character from lowerCase using the index random pick with Math.random
      var randChar = lowerCase[randIndex];
      // used the variable randChar to grab the randIndex from lowerCase
      possiblePassword.push(randChar);
       // used possiblePassword to grab the value of randChar to put the random character in the possiblities of password characters
    }
  }

  if (hasNumbers === true) {
    number = Array.from(number);
    // the Array.from makes number turn from a string to an array.
    for (let i = 0; i < length; i++) {
      // the for loop was to create something like i to measure the length and where to start and pick from
      var randIndex = Math.floor(Math.random() * number.length);
      // used the variable randIndex to connect the Math.floor and Math.random to pick random character from number using the index random pick with Math.random
      var randChar = number[randIndex];
      // used the variable randChar to grab the randIndex from number
      possiblePassword.push(randChar);
       // used possiblePassword to grab the value of randChar to put the random character in the possiblities of password characters
    }
  }

  if (hasSpecialCharacters === true) {
    specialCharacters = Array.from(specialCharacters);
    // the Array.from makes specialCharacters turn from a string to an array.
    for (let i = 0; i < length; i++) {
      // the for loop was to create something like i to measure the length and where to start and pick from
      var randIndex = Math.floor(Math.random() * specialCharacters.length);
      // used the variable randIndex to connect the Math.floor and Math.random to pick random character from specialCharacters using the index random pick with Math.random
      var randChar = specialCharacters[randIndex];
      // used the variable randChar to grab the randIndex from specialharacters
      possiblePassword.push(randChar);
       // used possiblePassword to grab the value of randChar to put the random character in the possiblities of password characters
    }
  }

  for (var i = 0; i < length; i++) {
    // the for loop was to create something like i to measure the length and where to start and pick from
    // choose possible character at random and add it too password until you reach the desire password length
    var randIndex = Math.floor(Math.random() * possiblePassword.length);
    // used the variable randIndex to connect the Math.floor and Math.random to pick random character from possiblePasswords using the index random pick with Math.random
    var randChar = possiblePassword[randIndex];
    // used the variable randChar to grab the randIndex from possiblePassword
    result.push(randChar);
    // using result to grab the randChar in order for it to input the random password choosen  with the selected characters and length
  }

  return result.join("");
  // used return to show the password choosen by result
  // used result.join to join the random characters for password to a stringto be visible on the page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
