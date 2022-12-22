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
var chosenCharacter =""

// created "function generatePassword" to define generatePassword and used return to give it value.
function generatePassword() {
  console.log("Generated button has been clicked!")
 
  return "password is generated"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

