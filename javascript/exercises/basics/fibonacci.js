function fibonacci(n) {
  if (n <= 1) return n;
  let v1 = 0;
  let v2 = 1;
  let cur;
  for (let i = 2; i <= n; i++) {
    cur = v1 + v2;
    v1 = v2;
    v2 = cur;
  }
  return cur;
}

export default fibonacci;
