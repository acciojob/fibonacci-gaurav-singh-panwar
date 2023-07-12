function fibonacci(num) {
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0 || num > 50) {
    throw new Error("Input must be a non-negative integer between 0 and 50.");
  }

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

module.exports = fibonacci;