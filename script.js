// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  function generatePassword(){
    lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    arrayofArray = [lowerCaseArray, upperCaseArray, numericArray, specialArray];
    passwordArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lengthOfPassword = prompt("How long would your password, please choose between 8 and 128")
  {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
