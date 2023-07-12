function fibonacci(num) {
  if (
    typeof num !== "number" ||
    !Number.isInteger(num) ||
    num < 0 ||
    num > 50
  ) {
    throw new Error(
      "Input must be a non-negative integer between 0 and 50."
    );
  }

  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;