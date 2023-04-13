const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayOne = [];
  let arrayTwo = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrayOne.push(i);
    } else {
      arrayTwo.push(arr[i]);
    }
  }

  arrayTwo.sort((firstValue, secondValue) => {
    if (firstValue < secondValue) {
      return -1;
    }
    if (firstValue > secondValue) {
      return 1;
    }
    return 0;
  });

  arrayOne.forEach((value) => {
    arrayTwo.splice(value, 0, -1);
  })
  return arrayTwo;
}

module.exports = {
  sortByHeight
};
