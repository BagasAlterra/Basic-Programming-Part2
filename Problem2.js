function numberFactor(num) {
  console.log(`Faktor dari ${num} adalah :`);

  // looping through 1 to num
  for (let i = 1; i <= num; i++) {
    // check if number is a factor
    if (num % i == 0) {
      console.log(i);
    }
  }
}

numberFactor(6);
numberFactor(20);
