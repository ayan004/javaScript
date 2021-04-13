console.log("This is script1 for the new task");

let inputDate = document.getElementById("date");
let inputTime = document.getElementById("time");
let button = document.getElementById("showButton");
let dtHolder = document.getElementById("dtHolder");

button.addEventListener("click", () => {
  let dt = inputDate.value;
  let date = dt.substr(8, 2);
  let month = dt.substr(5, 2);
  let year = dt.substr(0, 4);
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

  let time = inputTime.value;
  let hour = time.substr(0, 2);
  hour = parseInt(hour);
  let minute = time.substr(3, 2);
  //setting AM or PM - start
  let ampm;
  if (hour > 11 && hour < 23) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  //end
  //convert hour to new format - start
  if (hour > 12) {
    hour = hour - 12;
  }
  //end

  dtHolder.value =
    date + " " + month + " " + year + "    " + hour + ":" + minute + " " + ampm;
});
