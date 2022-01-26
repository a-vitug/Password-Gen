// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------- characters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '&'];

var userChoice;
var pUpperCase;
var pLowerCase;
var minimumNum;
var minimumLength = 0;
var pSpecialChar;
var result = [];
var genPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(event) {
// -------- prompt
  var pLength = prompt ("Enter the length of your custom password. Must be at least 8 characters and less than 128 characters long.");
  
// -------- if statements
  if (pLength < 8 || pLength > 128) {
    alert ("Invalid length. Please enter a valid number.");
  } else if (pLength >= 8 && pLength <= 128) {
    var pUpperCase = confirm ("Click OK to include upper case letters.");
    var pLowerCase = confirm ("Click OK to include lower case letters.");
    var pNum = confirm ("Click OK to include any numbers.");
    var pSpecialChar = confirm ("Click OK to include any special characters.");
  } if (pUpperCase !== true && pLowerCase !== true && pNum !== true && pSpecialChar !== true) {
    alert ("Please select at least one valid type!");
  } if (pUpperCase && pLowerCase && pNum && pSpecialChar) {
    userChoice = upperCase.concat(lowerCase, number, specialChar);
  }

// -------- 3 statements are true
  else if (pUpperCase && pLowerCase && pNum) {
    userChoice = upperCase.concat(lowerCase, number);
  } 
  else if (pUpperCase && pLowerCase && pSpecialChar) {
    userChoice = upperCase.concat(lowerCase, specialChar);
  } 
  else if (pUpperCase && pNum && pSpecialChar) {
    userChoice = upperCase.concat (number, specialChar);
  }
  else if (pLowerCase && pNum && pSpecialChar) {
    userChoice = lowerCase.concat (number, specialChar);
  }

//  ---------- 2 statements are true
  else if (pUpperCase && pLowerCase) {
    userChoice = upperCase.concat (upperCase, lowerCase);
  }
  else if (pUpperCase && pNum) {
    userChoice = upperCase.concat (upperCase, number);
  }
  else if (pUpperCase && pSpecialChar) {
    userChoice = upperCase.concat (upperCase, specialChar);
  }
  else if (pLowerCase && pNum) {
    userChoice = lowerCase.concat (lowerCase, number);
  }
  else if (pLowerCase && pSpecialChar) {
    userChoice = lowerCase.concat (lowerCase, specialChar);
  }
  else if (pNum && pSpecialChar) {
    userChoice = number.concat (number, specialChar);
  }
  
//  ---------- 1 statement is true
  else if (pUpperCase) {
    userChoice = upperCase;
  }
  else if (pLowerCase) {
    userChoice = lowerCase;
  }
  else if (pNum) {
    userChoice = number;
  }
  else if (pSpecialChar) {
    userChoice = specialChar;
  }

//  --------- for loop
  for (var i = 0; i < pLength; i++) {
    var randomPassword = userChoice[Math.floor(Math.random()* userChoice.length)];
    result.push(randomPassword);
  }
  return result.join('');
};

generateBtn.addEventListener("click", writePassword);