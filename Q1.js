function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = {};
  const mapped = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!map[charS] && !mapped[charT]) {
      map[charS] = charT;
      mapped[charT] = true;
    } else if (map[charS] !== charT) {
      return false;
    }
  }

  return true;
}

const s1 = "egg";
const t1 = "add";
console.log(isIsomorphic(s1, t1));

