const fibonacci = (num) => {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}

export default fibonacci
