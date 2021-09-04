// Arrays to be used to generate a password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var finalPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function 
function generatePassword() {
  var passwordLength = prompt("Hi there, please type password lenght (It must be between 8 and 128 characters)");

  if(!passwordLength){ //Close tab if cancel is selected
    return;
  }
  var numberChosen = parseInt(passwordLength,10); // Verify if a number has been chosen

  if(Number.isNaN(numberChosen)){
    numberChosen = prompt("Please type a valid number between 8 and 128"); // Make user choose a number
  }

  while(numberChosen < 8 || numberChosen > 128){
    numberChosen = prompt("Please choose a number between 8 and 128"); // Make sure number chosen is between 8 and 128
  }

  var isPossible = false; // Boolean to confirm is password is possible

  var inlcudeSpecial = confirm("Would you like to include special characters?"); // Booleans to get info
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeLowerCase = confirm("Would you like to include lower cased characters");
  var includeUpperCase = confirm("Would you like to include upper cased characters");

  while(!isPossible){
    if(inlcudeSpecial){
      break;
    }else{
      if(includeNumbers){
        break;
      }else{
        if(includeLowerCase){
          break;
        }else{
          if(includeUpperCase){
            break;
          }else{
            alert("At least one type of character must be selected");
          }
        }
      }
    }
    var inlcudeSpecial = confirm("Would you like to include special characters?"); // We give a chance to do the selection again
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeLowerCase = confirm("Would you like to include lower cased characters");
    var includeUpperCase = confirm("Would you like to include upper cased characters");
  }



  








}
