// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = "";
    let letterObject = {};
    let uniqueLetters = false;

    if (!alphabet || alphabet.length !== 26) return false;

    //does alphabet have all unique characters
    for (let i in alphabet) {
      if (!letterObject[alphabet[i]]) {
        letterObject[alphabet[i]] = 1;
      } else {
        return false;
      }
    }

    if (encode) {
      for (let i in input) {
        if (input[i] == " " || input[i] == "?" || input[i] == ".") {
          result += input[i];
          /*let asciicode = input[i].toLowerCase().charCodeAt();
          let location = asciicode - 97;
          result+=alphabet[location];*/
        } else {
          //result+=input[i];
          let asciicode = input[i].toLowerCase().charCodeAt();
          let location = asciicode - 97;
          result += alphabet[location];
        }
      }
    } else {
      for (let i in input) {
        if (input[i] == " ") {
          result += input[i];
        } else {
          //find the index of input[i] in alphabet
          let letterIndex = alphabet.indexOf(input[i]);
          //add the ascii code for 'a' to the index of the charcter from alphabet
          result += String.fromCharCode(97 + letterIndex);
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
