// # Challenge 2

// Implement the function numSwap(number) which
// takes a number of even length, swaps pairs of
// its adjacent digits and returns the swapped
// number.

function numSwap(number) {
  //convert number to string and determine if it is even or not
  const numStr = number.toString();
  if (numStr.length % 2 !== 0) {
    return "Provide an even number";
  } else {
    var result = 0,
      x = 1;
    while (number !== 0) {
      var dg1 = number % 10;
      var dg2 = ((number - dg1) / 10) % 10;
      result += x * (10 * dg1 + dg2);
      number = Math.floor(number / 100);
      x *= 100;
    }
  }
  return result;
}

module.exports = numSwap;

