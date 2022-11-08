function checkPalindrome(str) {
  //temukan panjang karakternya
  var len = str.length;

  //lakukan perulangan sebanyak dari setengah total string
  for (var i = 0; i < len / 2; i++) {
    //lakukan pengecekan apakah string pertama dan kedua sama atau tidak
    //kalau tidak sama, false
    //kalau sama, true
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome("civic"));
console.log(checkPalindrome("katak"));
console.log(checkPalindrome("kasur rusak"));
console.log(checkPalindrome("kupu-kupu"));
console.log(checkPalindrome("lion"));
