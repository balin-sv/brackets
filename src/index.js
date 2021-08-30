module.exports = function check(str, bracketsConfig) {
  let current;
  let opens = [];
  let closes = {};
  let stack = [];
  for (let o = 0; o < bracketsConfig.length; o++) {
    for (let r = 0; r < bracketsConfig[o].length; r++) {
      if (r === 0) {
        opens.push(bracketsConfig[o][r]);
      } else {
        closes[bracketsConfig[o][r]] = bracketsConfig[o][r - 1];
      }
    }
  }
  console.log(opens);
  console.log(closes);

  for (let o = 0; o < str.length; o++) {
    current = str[o];
    console.log(current);

    if (opens.includes(current)) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let top = stack[stack.length - 1];

      if (closes[current] === top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
