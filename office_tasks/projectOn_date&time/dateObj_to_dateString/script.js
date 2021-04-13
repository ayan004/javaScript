// console.log("this script -> date to string conversion");

let currentDT = new Date();
console.log(typeof currentDT);
console.log(currentDT);
let date = currentDT.getDate();
let month = currentDT.getMonth() + 1;
let year = currentDT.getYear() + 1900;
let seconds = currentDT.getSeconds();
let minutes = currentDT.getMinutes();
let hours = currentDT.getHours();

//converting the single digit seconds like 4, 8 to 04, 08, etc. - start
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
if (numbersArray.includes(seconds)) {
  seconds = seconds.toString();
  seconds = "0" + seconds;
}
//end

//catching am or pm - start
let ampm;
if (hours > 11) {
  ampm = "PM";
} else if (hours > 23) {
  ampm = "AM";
} else {
  ampm = "AM";
}
//end

//changing the hour - start
if (hours > 12) {
  hours = hours - 12;
}
//end

//creating the string having the date - start
let stringDT;
stringDT =
  date +
  "/" +
  month +
  "/" +
  year +
  "  " +
  hours +
  ":" +
  minutes +
  ":" +
  seconds +
  " " +
  ampm;
//end

//dsplaying the string having date -start
console.log(stringDT);
//end
