//reverse a string using stack
function Stack() {
  let data = [];
  let length = 0;
  return {
    push: (item) => {
      length++;
      return data.push(item);
    },
    pop: () => {
      if (length <= 0) return null;
      else {
        length--;
        return data.pop();
      }
    },
    peek: () => {
      if (length <= 0) return null;
      else return data[length - 1];
    },
    isEmpty: () => {
      return !length;
    },
  };
}

const reverseStr = (str) => {
  let revStr = "";
  let stack = new Stack();
  const strArr = str.split("");

  strArr.forEach((element) => {
    stack.push(element);
  });

  while (!stack.isEmpty()) {
    revStr += stack.pop();
  }

  return revStr;
};

console.log("Reverse String: ", reverseStr("abc"));
console.log("Reverse String: ", reverseStr("malayalam"));
