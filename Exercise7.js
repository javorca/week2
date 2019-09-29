var rows1 = 10;
var rows2 = 10;
var rows3 = 10;
var repeatedString = "*";
var string = "*"
var times = rows2;
var star = '';
var i;

do {
  console.log('*');
  rows1--
} while(rows1 !== 0)


do{
  while (rows2 > 0) {
    repeatedString += string;
    rows2--;
  }
  console.log(repeatedString);
  times--;
} while(times>=0)


do{
  for(i=0; i<=rows3;i++){
  star += '*';
  console.log(star)
  }
 rows3--;
} while(rows3<=0)

