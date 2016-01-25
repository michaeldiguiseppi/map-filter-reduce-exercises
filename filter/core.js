function onlyEven (array) {
  // your code here
  return array.filter(function(num) {
    return num % 2 === 0;
  });
};

function onlyOneWord (array) {
  // your code here
  return array.filter(function(string) {
        return string === string.replace(' ', '');
  });
};

function positiveRowsOnly (array) {
  // your code here
  // [2, 200].length === [2, -20, 200].length >> false
  // filter within filter
  return array.filter(function(value) {
    // console.log('Value: ', value);
    var filtered = value.filter(function(num) {
        // console.log('Num: ', num, 'Index: ', index);
        return num > 0;
    });
    return filtered.length === array.length;
  });
};

function allSameVowels (array) {
  // your code here
  var filtered = array.filter(function(word) {
    var newString = word.replace(/([bcdfghjklmnpqrstvwxyz])/g, '');
        if (newString === 'oo') {
            return word;
        }
        else {
            newString = newString.replace(/[^\w\s]|(.)\1/gi, '');
        };
        if (newString.length === 1) {
            return word;
        };
    });
  return filtered;
};


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};