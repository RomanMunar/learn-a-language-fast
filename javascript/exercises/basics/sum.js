// Sum will sum up all of the numbers passed
// in and return the result
// args:  int[]
// return: int

function Sum(...numbers) {
  return numbers.reduce((n, c) => (n += c));
}

export default Sum;
