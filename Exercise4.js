var day = []
var month = []
var year = []

for (var i = 1; i <= 31; i++) {
    day.push(i)
}

for (var i = 1; i <= 12; i++) {
    month.push(i)
}

for (var i = 1900; i <= 2200; i++) {
    year.push(i)
}

// Assign Variable Here:

var day = 21;
var month = 5;
var year = 1945;

switch (month) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}


console.log(day + "/" + month + "/" + year)

