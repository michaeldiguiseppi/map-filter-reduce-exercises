function multiplyBy10 (array) {

    return array.map(function(num) {
        return num * 10;
    });
};

function shiftRight (array) {
 // your code here
    return array.map(function(el, curr, arr) {
        if (arr[curr-1] === undefined) {
            return arr[arr.length-1];
        };
        return arr[curr-1];
    });
};

function onlyVowels (array) {
 // your code here
    var vowels = ['a','e','i','o','u'];

    return array.map(function(a, b, c) {
      return a.split('').filter(function(x, y, z) {
            for (var i = 0; i < vowels.length; i++) {
                if (x === vowels[i]) {
                    // console.log('X: ', x, 'Vowels: ', vowels[i])
                    return vowels[i];
                }
            }
        }).join('');
    });

// Failed attempt 1
       // return array.map(function(word, index, array) {
    //     return word.filter(function(letter, vowel) {
    //         console.log('Letter: ', letter, 'Vowel: ', vowel);
    //         return letter;
    //     });

// Failed attempt 2
    // return vowels.map(function(letter, vowel) {
    //             console.log('letter: ', letter, 'vowel: ', vowel);

    //             return vowel;
    //         });
        // console.log('Word: ', word, 'Index: ', index, 'Array: ', array);
        // return letter === vowel;
};

function doubleMatrix (array) {
 // your code here
    return array.map(function(arr, index, array) {
        return arr.map(function(thisArr, thisIndex, thisArray) {
            return thisArr * 2;
        });
    });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};