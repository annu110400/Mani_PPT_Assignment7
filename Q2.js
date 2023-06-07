function isStrobogrammatic(num) {
    const validStrobogrammaticDigits = ["0", "1", "8"];
    const mirroredDigits = {
      "6": "9",
      "9": "6"
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftDigit = num[left];
      const rightDigit = num[right];
  
      if (
        (validStrobogrammaticDigits.includes(leftDigit) && leftDigit !== rightDigit) ||
        (leftDigit in mirroredDigits && mirroredDigits[leftDigit] !== rightDigit)
      ) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }

  console.log(isStrobogrammatic("69"));