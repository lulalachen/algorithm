const fibonacci = (num) => (num === 0 || num === 1) ? 1 : fibonacci(num-1) + fibonacci(num-2)

export default fibonacci
