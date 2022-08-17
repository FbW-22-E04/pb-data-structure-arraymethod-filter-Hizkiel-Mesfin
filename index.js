//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

const filterRange = (arr, a, b) => arr.filter((el) => el >= a && el <= b);

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
const filterRangeInPlace = (arr, a, b) =>
  arr.filter((el) => a <= el && el <= b);

let array = [5, 3, 2, 3, 8, 1];

console.log(filterRangeInPlace(array, 1, 4));
