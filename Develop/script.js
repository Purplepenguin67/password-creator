// Assignment code here
//Creating variable array
var characterlength = 8;
var choicearr = [];


var lowerCaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numberarr =[]



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//prompts for character selection
function generatePassword()

function getprompt(){
  characterlength = parseintprompt("Choose how many characters that you would like to include up to 128");
  
  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128)
  return false;
}

  if (confirm("Would you like to include lower case letters?")) {
    choicearr = choicearr.concat(lowerCaseletters);
  }
  if (confirm("Would you like to include upper case letters?")) {
    choicearr = choicearr.concat(upperCaseletters);
  }
  if (confirm("Would you like to include special letters?")) {
    choicearr = choicearr.concat(specialcharacters);
  }
  if (confirm("Would you like to include numbers?")) {
    choicearr = choicearr.concat(numbers);
    return true;
  }







     
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
