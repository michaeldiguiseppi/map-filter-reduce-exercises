function sum (array) {
  // your code here
  return array.reduce(function (prev, curr) {
        return prev + curr;
  });
};

function productAll (array) {
  // your code here
  return array.reduce(function (product, row) {
    product *= row.reduce(function (prev, curr) {
      return prev * curr;
    });

    return product;
  }, 1);

    // var flattened = array.reduce(function (a, b) {
    //     return a.concat(b);
    // }, []);
    // var sum = flattened.reduce(function (a, b) {
    //     return a * b;
    // });
    // return sum;
};

function objectify (array) {
  // your code here
  // take in array of arrays
  // input is typeOf array, output is typeOf object
  // return an object, with index[0] as key, index[1] as value;
  return array.reduce(function (key, value) {
            key[value[0]] = value[1]
        return key;
  }, {});
};

function luckyNumbers (array) {
  // your code here
  // take in array
  // turn it into a string
  // concatinate the values into a fortune-like sentence
  // return the string

  return array.reduce(function (fortune, num, index, nums) {
    if (index === (nums.length - 1)) {
      return fortune += ( 'and ' + num);
    } else {
      return fortune += (num + ', ');
    }
  }, 'Your lucky numbers are: ');
  // var string = 'Your lucky numbers are: ';
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] === array[array.length - 1]) {
  //     string = string + ('and ' + array[i]);
  //   } else {
  //   string = string + (array[i] + ', ');
  //   };
  // };
  // console.log(string);
  // return string;
};



module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};