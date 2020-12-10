// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // need my length of password variable to be global so it can be accessed later.
  var lengthOfPassword;
  passwordText.value = password;

  function generatePassword() {
    // setting up the basic arrays needed
    lowerCaseArray = [
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
    upperCaseArray = [
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
    numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    // created the combination array
    arrayOfArray = [];
    // do while loop to ensure that the password is the proper length
    do {
      lengthOfPassword = prompt(
        "How long would your password, please choose between 8 and 128"
      );
    } while (lengthOfPassword > 128 || lengthOfPassword < 8);
    // following four prompts are to ask if the user wants various special characters
    if (confirm("Do you want uppercase letters in your password?")) {
      arrayOfArray.push(upperCaseArray);
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      arrayOfArray.push(lowerCaseArray);
    }
    if (confirm("Do you want special character in your password?")) {
      arrayOfArray.push(specialArray);
    }
    if (confirm("Do you want numeric characters in your password?")) {
      arrayOfArray.push(numericArray);
    }
    // if no criteria is chosen it alerts the user.
    if (arrayOfArray.length < 1 || arrayOfArray == undefined) {
      alert("You didn't pick any criteria.");
    }

    // making the random password via for loops.
    for (let i = 0; i < lengthOfPassword; i++) {
      // Math.floor(Math.random() * arrayOfArray.length)
      var whichArray = Math.floor(Math.random() * arrayOfArray.length);
      console.log(arrayOfArray.length);
      var randomChosen = Math.floor(Math.random() * arrayOfArray[whichArray].length);
      if (i === 0) {
        password = arrayOfArray[whichArray][randomChosen];
      } else {
        password = password + arrayOfArray[whichArray][randomChosen];
      }
    }
    return password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
