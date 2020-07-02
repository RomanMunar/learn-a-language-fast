function duplicateCount(s) {
  s = s.toLowerCase();
  const characters = s.split("");
  let counter = 0;
  let isCharMatched = new Map();
  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      if (characters[j] == characters[i]) {
        if (isCharMatched.get(characters[i], true)) {
          break;
        }
        isCharMatched.set(characters[i], true);
        counter++;
      }
    }
  }
  return counter;
}

export default duplicateCount;
