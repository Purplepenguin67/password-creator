// Assignment code here
//Creating variable array
var characterlength = 8;
var choicearray = [];


var lowerCaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//password randomization
function generatePassword(){
  var password = "";
  for (var i = 0; i < characterlength; i++){
    var random = (Math.random() * choicearray.length)
    password = password + choicearray[random];
}
return password;

}
//Prompts
function getprompts(){

  characterlength = parseintprompt("Choose how many characters that you would like to include up to 128");
  
  if(isNaN(characterlength) || characterlength > 128 ||   characterlength < 8){
  return false;
}

  if (confirm("Would you like to include lower case letters?")) {
    choicearr = choicearray.concat(lowerCaseletters);
  }
  if (confirm("Would you like to include upper case letters?")) {
    choicearr = choicearray.concat(upperCaseletters);
  }
  if (confirm("Would you like to include special letters?")) {
    choicearray = choicearray.concat(specialcharacters);
  }
  if (confirm("Would you like to include numbers?")) {
    choicearray = choicearray.concat(numbers);
  }

    return true;
  }


     
// Write password to the #password input
function writePassword() 
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
