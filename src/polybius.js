// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    let messageArray = "";

    let columnNumTemp = 0;
    let rowNumTemp = 0;

    let columnNum = 0;
    let rowNum = 0;

    let asciiCode = 0;

    if (encode === true) {
      for (let i in input) {
        let column = 1; //letter a is the starting point. So column == 1 and row == 1
        let row = 1;
        //Is input[i] a letter
        if (/^[a-zA-Z]+$/.test(input[i])) {
          let asciiCode = input[i].toLowerCase().charCodeAt(); //change to lowercase and get ascii code
          //letters from a to i
          if (asciiCode >= 97 && asciiCode <= 105) {
            //find the column value from the calculation
            columnNumTemp = (asciiCode - 97) % 5;
            column += columnNumTemp;
            //find the row value from the calculation
            rowNumTemp = Math.floor((asciiCode - 97) / 5);
            row += rowNumTemp;
            //change column and row to a string and assign it to the messageArray variable
            messageArray += column.toString();
            messageArray += row.toString();
          } else {
            columnNumTemp = (asciiCode - 97 - 1) % 5; //find the row
            column += columnNumTemp; //add the column value to the column variable
            //console.log("column: " + column);
            rowNumTemp = Math.floor((asciiCode - 97 - 1) / 5); //
            row += rowNumTemp;
            //console.log("Row: " + row);
            messageArray += column.toString();
            messageArray += row.toString();
            //console.log()
          }
        }
        //if character is not a letter add to the array
        else {
          messageArray += input[i];
        }
      }
    } else {
      let codeWithoutSpaces = input.split(" ").join("");
      if (codeWithoutSpaces.length % 2 === 1) return false;
      for (
        let i = 0;
        i < input.length - 1;
        i += 2 //increment i by 2
      ) {
        if (input[i] != " ") {
          columnNumTemp = parseInt(input[i]); //get i which is column number and convert to int
          rowNumTemp = parseInt(input[i + 1]); // get i+1 which is row number and convert to int

          if (rowNumTemp * 10 + columnNumTemp < 24) {
            //first case. Number represent letters from a to h
            //console.log(`column num is: ${columnNumTemp} and row Num is: ${rowNumTemp}`)
            columnNum = parseInt(columnNumTemp) - 1; //convert from string to int and perfrom calculation for column
            rowNum = (parseInt(rowNumTemp) - 1) * 5; ////convert from string to int and perfrom calculation for row
            //console.log("columnNum: " + columnNum + " rowNum: " +rowNum )
            asciiCode = 97 + columnNum + rowNum;
            //console.log(String.fromCharCode(asciiCode))
            messageArray += String.fromCharCode(asciiCode);
          } else if (rowNumTemp * 10 + columnNumTemp === 24) {
            //second case. If the numbers represent i or j
            messageArray += "i/j";
          } //third case. Every letter after j
          else {
            //console.log(`column num is: ${columnNumTemp} and row Num is: ${rowNumTemp}`)
            columnNum = parseInt(columnNumTemp); //convert from string to int and perfrom calculation for column
            rowNum = (parseInt(rowNumTemp) - 1) * 5; ////convert from string to int and perfrom calculation for row
            //console.log("columnNum: " + columnNum + " rowNum: " +rowNum )
            asciiCode = 97 + columnNum + rowNum;
            //console.log(String.fromCharCode(asciiCode))
            messageArray += String.fromCharCode(asciiCode);
          }
        } else {
          messageArray += input[i];
          i--; //when input[i] is a space then decrement i
        }
      }
    }
    return messageArray;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
