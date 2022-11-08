function checkPrime(number) {
  let isPrime = true;
  // cek jika angka yang diinputkan sama dengan 1
  if (number === 1) {
    console.log("1 tidak termasuk bilangan prima");
  }
  // cek jika angka yang diinputkan lebih besar dari 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      //sepanjang 2 sampai N, dicek ada yang habis dibagi atau tidak
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  //cek jika number yang diinputkan kurang dari 1
  else {
    console.log("Nomor yang diinputkan diluar jangkauan");
  }
}

checkPrime(11);
checkPrime(13);
checkPrime(17);
checkPrime(20);
checkPrime(35);
