/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  // Your code goes here
  if (typeof names === 'undefined' || names.length === 0) {
    return [];
  }
  const answer = [];
  if (names.length % 2 === 0 && names.length !== 0) {
    let pairsNum = names.length / 2;
    for (let i = 0; i < pairsNum; i++) {
      answer.push([names.getRandom(), names.getRandom()]);
    }
    return answer;
  }
  let pairsNum = (names.length - 1) / 2;
  for (let i = 0; i < pairsNum; i++) {
    answer.push([names.getRandom(), names.getRandom()]);
  }
  answer.push([names.getRandom()]);
  return answer;
}

module.exports = pairs;

console.log(
  pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato'])
);
