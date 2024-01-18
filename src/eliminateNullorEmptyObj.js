const person = {
  name: "abc",
  age: "",
  address: {
    line1: "1st street",
    line2: null,
    pincode: 111,
  },
};

const eliminateNullOrEmpty = (obj) => {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === "") {
      delete obj[key];
    }
    if (typeof obj[key] === "object") {
      eliminateNullOrEmpty(obj[key]);
    }
  }
  return obj;
};

console.log("new obj without null opr empty: ", eliminateNullOrEmpty(person));
