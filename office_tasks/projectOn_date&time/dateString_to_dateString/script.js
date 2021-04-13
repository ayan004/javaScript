console.log("Date String to Date String");

let dateTime = "17/12/2020 04:20:23 PM";
let date = dateTime.substr(0, 2);
let month = dateTime.substr(3, 2);
let year = dateTime.substr(6, 4);
let hour = dateTime.substr(11, 2);
let minute = dateTime.substr(14, 2);
let second = dateTime.substr(17, 2);
let ampm = dateTime.substr(20, 2);

//convert date to new format - start
if (date == "01") {
  date = "1st";
} else if (date == "02") {
  date = "2nd";
} else if (date == "03") {
  date = "3rd";
} else {
  if (date.substr(0, 1) == 0) {
    date = date.substr(1, 1);
  }
  date = date + "th";
}
//end

//convert month to new format - start
switch (month) {
  case "01":
    month = "January";
    break;

  case "02":
    month = "February";
    break;

  case "03":
    month = "March";
    break;

  case "04":
    month = "April";
    break;

  case "05":
    month = "May";
    break;

  case "06":
    month = "June";
    break;

  case "07":
    month = "July";
    break;

  case "08":
    month = "August";
    break;

  case "09":
    month = "September";
    break;

  case "10":
    month = "October";
    break;

  case "11":
    month = "November";
    break;

  case "12":
    month = "December";
    break;

  default:
    console.log("Entered month in the date is wrong");
}
//end

//convert hour to new format - start
hour = parseInt(hour);
if (ampm == "AM" && hour == 12) {
  hour = hour + 12;
}
if (ampm == "PM" && hour < 12) {
  hour = hour + 12;
}
//end

//create the new format and print it
let newDateTime;
newDateTime =
  date + " " + month + " " + year + "   " + hour + ":" + minute + ":" + second;
console.log(newDateTime);
