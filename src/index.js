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
  };
  const equalBrackets = [];

  bracketsConfig.forEach(el => {
    if(el[0] === el[1]) {
      equalBrackets.push(el[0])
    }
  });

  for (let i = 0; i < str.length; i++) {

    let cur = str[i];
    let top = arr[arr.length - 1];

    if (arr.includes(cur) && equalBrackets.includes(cur)) {
      if (cur = top) {
        arr.pop(cur);
      } else {
        return false;
      }
    } else if (openBrackets.includes(cur)) {
      arr.push(cur);
    } else {
      if (arr.length === 0) {
        return false;
      }

      
      if (brackectsPair[cur] === top) {
        arr.pop(cur);
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}
