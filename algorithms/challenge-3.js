// # Challenge 3

// Implement the function increment(arr, value)
// which increments the value of val key in every
// object inside the array by the given value and
// returns the new array

function increment(arr, value) {
  //array of propertiess
  if (Array.isArray(arr)) {
    //iterate through eaxch property
    arr.forEach((i) => {
      //assign new value
      let newValue = i.val + value;
      i.val = newValue;
    });
    return arr;
  }
}
module.exports = increment;

// for(let k in arr){
//   let newArr = arr.map(k => {
//       return arr[k] + value
//     })
// return newArr
//  }
//
// const newObj = Object.keys(arr).reduce((acc, key) => {
//   return {...acc, [key]: ''};
// }, {});
// return newObj

// return Object.keys(arr).forEach((key) => {
//   arr[key] += value;
// });

// const newArr = arr.map(obj => {
//   if (obj.id === 1) {
//     return {...obj, name: 'Alfred'};
//   }

//   return obj;
// });
