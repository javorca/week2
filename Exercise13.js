function xo(str) {
  var countx = 0;
  var counto = 0;
  var length = str.length;
  var boolean;
    for(i=0; i<=length; i++) {
    if(str[i] === 'x'){
      countx += 1;
    } else if(str[i] === 'o'){
      counto += 1;
    }
  }
    if(countx === counto){
    boolean = true;
  } else {
    boolean = false;
  }
  return boolean;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

