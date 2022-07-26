module.exports = function check(str, bracketsConfig) {
  let arr = [];
  const openBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8']
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      arr.push(str[i]);
    } else {
      if (arr.length === 0) {
        return false;
      }

      if (bracketsConfig[str[i]] === arr[arr.length-1]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}
