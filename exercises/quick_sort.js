const coll = [5, 2, 6, 1, 30, -10];

const quickSort = (arr) => {
  const { length } = arr;
  console.log(arr); // check the iterations (left and right sides)

  if (length < 2) { // base condition to stop the recursion
    return arr;
  }
  const pivot = arr[0]; // the pivot is 5
  const left = [];
  const right = [];

  for (let i = 1; i < length; i += 1) {
    if (pivot > arr[i]) { // 5 > 2, so 2 goes to the left side
      left.push(arr[i]);
    } else {
      right.push(arr[i]); // 5 < 6, so 6 goes to the right side
    }
  }

  // when the left array riches an array with a single element [-10] the quickSort function will
  // return results of the call stack. It will simply insert each pivot between the left and right
  // arrays

  console.log('___________');
  // left array[-10, 1, 2], pivot[5], right array[6, 30]
  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort(coll));
