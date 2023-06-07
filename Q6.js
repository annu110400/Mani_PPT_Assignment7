function canShift(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const len = s.length;
    let rotations = 0;
  
    while (rotations < len) {
      if (s === goal) {
        return true;
      }
  
      s = s.slice(1) + s[0];
      rotations++;
    }
  
    return false;
  }

  console.log(canShift("abcde", "cdeab"));