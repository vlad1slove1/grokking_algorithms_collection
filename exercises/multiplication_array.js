const coll = [2, 3, 7, 8, 10];

const solution = (arr) => {
  const { length } = arr;
  let result = '\n';

  for (let i = 0; i < length; i += 1) {
    // console.log(arr[i]);
    for (let j = 0; j < length; j += 1) {
      result += (` ${arr[i] * arr[j]} `);
    }

    result += '\n';
  }

  return result;
};

console.log(solution(coll));
