// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthOfPassword;
  passwordText.value = password;

  function generatePassword() {
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
    arrayOfArray = [];

    do {
      lengthOfPassword = prompt(
        "How long would your password, please choose between 8 and 128"
      );
    } while (lengthOfPassword > 128 || lengthOfPassword < 8);
    if (confirm("Do you want uppercase letters in your password?")) {
      arrayOfArray.push(upperCaseArray);
      console.log(arrayOfArray);
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      arrayOfArray.push(lowerCaseArray);
      console.log(arrayOfArray);
    }
    if (confirm("Do you want special character in your password?")) {
      arrayOfArray.push(specialArray);
      console.log(arrayOfArray);
    }
    if (confirm("Do you want numeric characters in your password?")) {
      arrayOfArray.push(numericArray);
      console.log(arrayOfArray);
    }
    if (arrayOfArray.length < 1 || arrayOfArray == undefined) {
      alert("You didn't pick any criteria.");
    }
    for (let i = 0; i < lengthOfPassword; i++) {
      // Math.floor(Math.random() * arrayOfArray.length)
      var chosen = Math.floor(Math.random() * lowerCaseArray.length);
      console.log(password);
      password = password + lowerCaseArray[chosen];
      // console.log(password);
    }
    return password;
  }
}
// Math.floor(Math.random() * passwordArray.length)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
