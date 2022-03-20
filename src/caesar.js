// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Does shift meet certain conditions?
    if (shift === undefined || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    let strArray = "";
    let wrappAround = 97; //set the wrapp around variable to 97 => 'a'

    if (encode == false) shift = shift * -1; // if encode is false change shift to a negative num

    if (shift < 0) wrappAround = 122; //if shift < 0, then wrapp arroun is set to 'z

    for (let i in input) {
      //let letter = input[i];
      if (/^[a-zA-Z]+$/.test(input[i])) {
        let asciiCode = input[i].toLowerCase().charCodeAt(); //change to lower case and find ascii code
        let asciiShift = ((asciiCode - wrappAround + shift) % 26) + wrappAround; //wrap each letter accound ascii

        let newLetter = String.fromCharCode(asciiShift); //shift the letter
        strArray += newLetter;
      } else {
        strArray += input[i];
      }
    }
    //console.log(strArray)
    return strArray;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
