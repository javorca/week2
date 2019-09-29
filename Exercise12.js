function konversiMenit(menit) {
if (menit<60){
  var string = "0:"+menit
} else{
  var remain = menit%60;
  var minute = (menit-remain)/60;
  if (remain < 10){
    var string = minute + ":0" + remain;
  }else{
  var string = minute + ":" + remain;
  }
}
return string;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00