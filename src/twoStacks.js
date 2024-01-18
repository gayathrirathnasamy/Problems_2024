function TwoStacks(n) {
  let data = new Array(n).fill(null);
  let top1 = -1;
  let top2 = n;

  return {
    data,
    top1,
    top2,
    push1: (item) => {
      top1++;
      data[top1] = item;
    },
    push2: (item) => {
      top2--;
      data[top2] = item;
    },
    pop1: () => {
      if (top1 > -1) {
        let item = data[top1];
        data[top1] = null;
        top1--;
        return item;
      } else {
        console.log("stackoverflow");
        return null;
      }
    },
    pop2: () => {
      if (top2 < n) {
        let item = data[top2];
        data[top2] = null;
        top2++;
        return item;
      } else {
        console.log("stackoverflow");
        return null;
      }
    },
  };
}

const twoStacks = new TwoStacks(10);
twoStacks.push1("a");
twoStacks.push1("b");
twoStacks.push1("c");
twoStacks.push2("z");
twoStacks.push2("y");
console.log(twoStacks.pop1());
console.log(twoStacks.pop1());
console.log(twoStacks.pop1());
console.log(twoStacks.pop2());
console.log(twoStacks.pop2());
console.log(twoStacks.pop2());
