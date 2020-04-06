
generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);


function generateP() {
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var symbols = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."]
    var type = [];
    
    function characterType() {
        specialCharacter = confirm("Do you want to have special character in your password?");
        if (specialCharacter === true) {
            type.push(symbols);

        }
        else { "" };
        numbercharacter = confirm("Do you want to have number in your password?")
        if (numbercharacter === true) {
            type.push(numbers)
        }
        else { "" };
        upperCharacter = confirm("Do you want to have uppercase in your password?")
        if (lowerCharacter === true) {
            type.push(upper)
        }
        else { "" }
        lowerCharacter = confirm("Do you want to have lowercase in your password?")
        if (lowerCharacter === true) {
            type.push(lower)
        }
        else { "" }

    }
    var type = [];
    if (type == "") {
        alert("you need to choose at least one character type")
        return;
    }
    var myJ = JSON.stringify(type);
    return type.sort().join('');

}
console.log(characterType);
var size = prompt("please choose what length you want your password ?")
if (size < 8 || size > 128) {
    alert("Minimum is 8 and maximum is 128")
    return
}
for (var i = 0; i < size; i++) {
    password = password + type.chaArt(Math.floor(Math.random() * Math.floor(type.size - 1)))
}

generateP();

// Get references to the #copy and #generate elements
var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}

