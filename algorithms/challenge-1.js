// # Challenge 1

// Implement the function missingNumber(numArr)
// which returns the missing number in a given
// integer array between 1 and 9. If there is no
// missing number, the function should return
// false. If there is more than one missing number,
//  the function should return the result in an
//  array sorted in ascending order.

function missingNumber(numArr) {
  // Array of integer between 1 and 9
  const integerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Array containing missing numbers
  let missingNumArr = [];
  //iterate through element s
  for (let k of integerArr) {
    //check if number in numArr is also in Integere arr
    if (numArr.includes(k) === false) {
      missingNumArr.push(k);
    }
  }
  //conditional statements and results

  if (missingNumArr.length === 0) {
    return false;
  } else if (missingNumArr.length === 1) {
    let missingNum = missingNumArr[0];
    return missingNum;
  } else {
    return missingNumArr.sort();
  }
}

module.exports = missingNumber;

