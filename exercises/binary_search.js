const coll = [1, 3, 5, 7, 9];

// Binary search takes and array and given number. If given number exists
// inside the array, function returns its index (position inside array)

const binarySearch = (arr, number) => {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    // Math.floor() rounds down the argument to the nearest smaller integer
    // To round up, use Math.ceil()

    if (number === arr[middleIndex]) {
      return `Number's index is ${middleIndex}`;
    }
    if (number > arr[middleIndex]) {
      firstIndex = middleIndex + 1;
      // deleting left half of the array;
    }
    lastIndex = middleIndex - 1;
    // deleting right half of the array;
  }

  return `Number ${number} doesn't exist`;
};

console.log(binarySearch(coll, 2));
