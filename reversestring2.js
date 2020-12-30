function reversed(str) {
  reversed = '';

  for (let char of str) {
    reversed = char + reversed
  }
  console.log(reversed)
  console.log(Date())
}

reversed('That muther fugger!!')
