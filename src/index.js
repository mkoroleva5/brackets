module.exports = function check(str, bracketsConfig) {
  let arr = [];
  const openBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8']
  const brackectsPair = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  }

  for (let i = 0; i < str.length; i++) {

    let cur = str[i];
    if (openBrackets.includes(cur)) {
      arr.push(cur);
    } else {
      if (arr.length === 0) {
        return false;
      }

      let top = arr[arr.length - 1];
      if (brackectsPair[cur] === top) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}
