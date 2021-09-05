// Arrays to be used to generate a password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayPassword = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters,]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function 
function generatePassword() {
  var finalPassword = "";

  var passwordLength = prompt("Hi there, please type password length (It must be between 8 and 128 characters)");

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
  // At this point we know user chose a number between 8 and 128, moreover, characters user wants to be included in password

  var arrayChoicesUser = [inlcudeSpecial, includeNumbers, includeLowerCase, includeUpperCase];

  for(var i=0; i < numberChosen; i++) {  //We need to do this process as many times as user chose

    var index = Math.floor(Math.random() * arrayChoicesUser.length); // Get an index to choose a type of character

    while(!arrayChoicesUser[index]) {
      index = Math.floor(Math.random() * arrayChoicesUser.length); // We need to verify that the type of character was requested by user
    }

    // Now we need to get a random char from the type user requested and concat it to make the final password
    var auxArray = arrayPassword[index]; 
    var charChosen = auxArray[Math.floor(Math.random() * auxArray.length)];

    finalPassword = finalPassword.concat(charChosen);
  }
  // We return final password 
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


