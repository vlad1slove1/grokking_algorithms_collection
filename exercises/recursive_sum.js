const coll = [1, 2, 3, 4, 5];

// The shift() method is a mutating method
const getSum = (arr) => {
  const { length } = arr;
  let sum = arr.shift(); // removing first element from an array

  if (length === 0) { // sum of an empty array is 0
    return 0;
  }

  sum += getSum(arr);

  return sum;
};

console.log(getSum(coll));
console.log(coll); // empty array after execution

const coll2 = [1, 2, 3, 4, 5];

// The slice() method returns a shallow copy of a portion of an array into a new array
const getSum2 = (arr) => {
  const { length } = arr;
  let sum = arr[0]; // taking first element of a given array

  if (length === 0) { // sum of an empty array is 0
    return 0;
  }

  sum += getSum2(arr.slice(1));

  return sum;
};

console.log(getSum2(coll2));
console.log(coll2); // entire array after execution

const coll3 = [1, 2, 3, 4, 5];

// The reduce() method applies the reducer function to each element of the array (left to right),
// returning a single resulting value.
const getSum3 = (arr) => {
  const sum = 0;
  return arr.reduce((previousItem, currentItem) => previousItem + currentItem, sum);
};

console.log(getSum3(coll3));
console.log(coll3); // entire array after execution
