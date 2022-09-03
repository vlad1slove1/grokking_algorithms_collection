const list = [10, 43, -4, 0, 52, 4, -1];

// finding smallest item and its index in the array
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((item) => {
    if (item < smallest) {
      smallest = item;
      smallestIndex = arr.indexOf(item);
    }
  });

  // console.log(`Smallest item is ${smallest}`); // show smallest item
  return smallestIndex;
};

// console.log(findSmallest(list));

// creating empty array and inserting the smallest item in it
const selectionSort = (arr) => {
  const sortedArr = [];
  const { length } = arr;

  for (let i = 0; i < length; i += 1) {
    const smallest = findSmallest(arr);
    sortedArr.push(arr.splice(smallest, 1)); // creating nested array
  }

  return sortedArr.flat(); // flatting nested array
};

console.log(selectionSort(list));
