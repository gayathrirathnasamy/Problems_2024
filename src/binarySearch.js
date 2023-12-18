const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, value, low = 0, high = arr.length - 1) => {
  if (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    return arr[mid] === value
      ? mid
      : value < arr[mid]
        ? binarySearch(arr, value, low, mid - 1)
        : binarySearch(arr, value, mid + 1, high);
    // if (arr[mid] === value) {
    //   return mid;
    // }
    // if (value < arr[mid]) {
    //   return binarySearch(arr, value, low, mid - 1);
    // } else {
    //   return binarySearch(arr, value, mid + 1, high);
    // }
  }
  return -1;
};

console.log(binarySearch(a, 7));
