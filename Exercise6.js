// Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA")

var text = "";
var i = 0;
while (i <= 20) {
  if(i%2 === 0){
  console.log(i + " - I love coding")
  }
  i++;
}

console.log("LOOPING KEDUA")

var text = "";
var i = 20;
while (i >= 0) {
  if(i%2 === 0){
  console.log(i + " - I love coding")
  }
  i--;
}

// Melakukan Looping Menggunakan For

var i;
for (i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

for (i = 20; i >= 1; i--) {
  console.log(i + " - I love coding");
}


// Angka Ganjil dan Genap
var odd_count = 0;
var even_count = 0;
var three_count = 0;
var six_count = 0;
var nine_count = 0;
var ten_count = 0;
var i;
var text = "counter sekarang = ";

for (i = 1; i<=100;i++){
  if(i%2 !== 0 || i === 1){
    odd_count = odd_count + 1;
  } else if (i%2 === 0) {
    even_count = even_count + 1;
    if(i%10 === 0){
      ten_count = ten_count + 1;
    } else if (i%6 === 0){
      six_count = six_count+1;
    } 
  }
  if(i%3 === 0){
      three_count = three_count + 1;
    } 
  if (i%9 === 0){
    nine_count = nine_count+1;
  } 
}

console.log(text + "angka ganjil "+ odd_count)

console.log(text + "angka genap "+ even_count)

console.log(text + "angka kelipatan 3 "+ three_count)


console.log(text + "angka kelipatan 6 "+ six_count)

console.log(text + "angka kelipatan 9 "+ nine_count)

console.log(text + "angka kelipatan 10 "+ ten_count)