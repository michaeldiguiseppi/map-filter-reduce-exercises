function multiplyBy10 (array) {

    return array.map(function(num) {
        return num * 10;
    });
};

function shiftRight (array) {
 // your code here
    //take index of current value
    //add 1 to it
    //take modulo 3 to give the new index.

    return array.map(function(el, curr, arr) {
        if (arr[curr-1] === undefined) {
            return arr[arr.length-1];
        };
        return arr[curr-1];
    });
};

function onlyVowels (array) {
 // your code here
};

// function doubleMatrix (array) {
//  // your code here
// };

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  //doubleMatrix: doubleMatrix
};