// Fibonacci returns the nth fibonacci number.
//
// A Fibonacci number N is defined as:
//
//   Fibonacci(N) = Fibonacci(N-1) + Fibonacci(N-2)
//
// Where the following base cases are used:
//
//   Fibonacci(0) => 0
//   Fibonacci(1) => 1
//
//
// Examples:
//
//   Fibonacci(0) => 0
//   Fibonacci(1) => 1
//   Fibonacci(2) => 1
//   Fibonacci(3) => 2
//   Fibonacci(4) => 3
//   Fibonacci(5) => 5
//   Fibonacci(6) => 8
//   Fibonacci(7) => 13
//   Fibonacci(14) => 377
//
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
