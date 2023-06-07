function backspaceCompare(s, t) {
    const processString = (str) => {
      const result = [];
      for (let char of str) {
        if (char !== '#') {
          result.push(char);
        } else if (result.length > 0) {
          result.pop();
        }
      }
      return result.join('');
    };
  
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }

  console.log(backspaceCompare("ab#c", "ad#c"));