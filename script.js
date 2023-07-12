function fibonacci(num) {
// your code here 
	if (typeof num !== 'number' || !Number.isInteger(num) || num < 0 || num > 50) {
    throw new Error('Input must be a non-negative integer between 0 and 50.');
  }
  
  // base cases
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  
  // recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
}
module.exports = fibonacci;
