module.exports = function zeros(expression) {
  // your solution
  let factorialNumber;
  let checkDivisionRemainder;
  let fiveQuantity = 0;
  let twoQuantity = 0;
  let factorialsArray = expression.split("*"); /*break up to all factorials multipliers*/

  for (let i = 0; i < factorialsArray.length; i++) {
    if (factorialsArray[i].includes("!!")) {  /*here we check if there is double factorial*/
      factorialNumber = Number(factorialsArray[i].replace('!!', ''));
      if (factorialNumber % 2 == 0) { /*here check if it is even*/
        for (let j = factorialNumber; j > 1; j -= 2) {
          checkDivisionRemainder = j;
          while (checkDivisionRemainder % 2 == 0) {
            twoQuantity += 1;
            checkDivisionRemainder /= 2;
          }
          checkDivisionRemainder = j;
          while (checkDivisionRemainder % 5 == 0) {
            fiveQuantity += 1;
            checkDivisionRemainder /= 5;
          }
        }
      }
      else {  /*operate odd double factorial*/
        for (let j = factorialNumber; j > 0; j -= 2) {
          checkDivisionRemainder = j;
          while (checkDivisionRemainder % 2 == 0) {
            twoQuantity += 1;
            checkDivisionRemainder /= 2;
          }
          checkDivisionRemainder = j;
          while (checkDivisionRemainder % 5 == 0) {
            fiveQuantity += 1;
            checkDivisionRemainder /= 5;
          }
        }
      }
    }
    else {
      factorialNumber = Number(factorialsArray[i].replace('!', '')); /*operations on regular factorial*/
      for (let j = factorialNumber; j > 0; j--) {
        checkDivisionRemainder = j;
        while (checkDivisionRemainder % 2 == 0) {
          twoQuantity += 1;
          checkDivisionRemainder /= 2;
        }
        checkDivisionRemainder = j;
        while (checkDivisionRemainder % 5 == 0) {
          fiveQuantity += 1;
          checkDivisionRemainder /= 5;
        }
      }
    }
  }
  return fiveQuantity < twoQuantity ? fiveQuantity : twoQuantity;
}
