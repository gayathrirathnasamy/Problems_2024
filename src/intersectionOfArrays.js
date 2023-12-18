//Intersection of sorted arrays (find common elements in Array)

const a1 = [1, 5, 10, 20];
const a2 = [1, 2, 20, 25, 30, 35];
const a3 = [1, 2, 1, 1, 3];
const a4 = [1];

const intersectionOfSortedArray = (a, b) => {
  let i = 0;
  let j = 0;
  const temp = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    } else {
      temp.push(a[i]);
      i++;
      j++;
    }
  }
  return temp;
};

console.log("common array");
console.log(intersectionOfSortedArray(a3, a4));

const intersectionOfSortedArray1 = (a, b) => {
  return a.filter((elt) => b.includes(elt));
};

console.log(intersectionOfSortedArray1(a3, a4));
