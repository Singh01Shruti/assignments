/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length == 0) return undefined;
    if(numbers[0] >= 0) {
        numbers.sort((a, b) => a - b);
        return numbers[numbers.length-1];
    } else {
        numbers.sort((a, b) => a -b);
        return numbers[numbers.length-1];
    }
   
}

let numbers = [15, 27, 8, 12];
//let numbers = [15, 3, 6, 7];
console.log(findLargestElement(numbers));
module.exports = findLargestElement;