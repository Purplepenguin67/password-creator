
//Creating variable array

var choicearray = [];


var lowerCaselettersarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaselettersarray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharactersarray = ['@', '%', '+', '!', '#', '$', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
var numbersarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





//password randomization
function generatePassword(){
  var randompassword = "";
  for (var i = 0; i < characterlength; i++){
    var random = math.floor(Math.random() * choicearray.length)
    randompassword = password + choicearray[random];
}
return randompassword;

}
//Prompts
function getprompts(){

  characterlength = parseint(prompt("Choose how many characters that you would like to include up to 128"));

  if(isNaN(characterlength) || characterlength > 128 ||  characterlength < 8){
    return false;

  }
 
}


  if (confirm("Would you like to include lower case letters?")) {
    choicearray = choicearray.concat(lowerCaselettersarray);
  }
  if (confirm("Would you like to include upper case letters?")) {
    choicearray = choicearray.concat(upperCaselettersarray);
  }
  if (confirm("Would you like to include special letters?")) {
    choicearray = choicearray.concat(specialcharactersarray);
  }
  if (confirm("Would you like to include numbers?")) {
    choicearray = choicearray.concat(numbersarray);


  }


     
// Write password to the #password input
function writePassword() {
    var randompassword = generaterandomPassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = randompassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
