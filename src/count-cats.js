const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


function countCats(arr) {
  let numberOfCats = 0;
  const cat = '^^';
  let newStr = arr.join(',');
  let newArr = newStr.split(',');

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === cat) {
      numberOfCats += 1;
    }
  }
  return numberOfCats;
}


module.exports = {
  countCats
};
