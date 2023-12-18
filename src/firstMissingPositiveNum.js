// To find 1st missing positive number
// [1,2,4,1,3,6] 5
// [1,2,3] 4
// [-1, -2, -3] 1
// [10, 100, 90] 1
function solution(A) {
  if (A.every((n) => n < 0)) return 1;
  else {
    A.sort((a, b) => a - b);
    for (let i = 1; i <= A.length + 1; i++) {
      let numberExist = false;
      for (let j = 0; j < A.length; j++) {
        if (A[j] === i) {
          numberExist = true;
          break;
        }
      }
      if (!numberExist) {
        return i;
      }
    }
  }
}

const arr = [1, 2, 3, 1, 4, 6];
console.log(solution(arr));

function solution1(A) {
  console.log(A.length);
  if (A.every((n) => n < 0)) return 1;
  else {
    //A.sort((a,b) => a - b);
    console.log(A);
    for (let i = 1; i <= A.length + 1; i++) {
      if (!A.includes(i)) {
        return i;
      }
    }
  }
}

const arr1 = [1, 2, 3, 1, 4, 6];
console.log(solution1(arr1));
