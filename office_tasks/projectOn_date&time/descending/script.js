console.log("dates to be arrange in descending order");

let dt = [
  "12/17/2020 17:11:23",
  "06/05/1920 16:11:23",
  "06/05/1980 16:15:23",
  "07/05/1985 16:47:23",
  "05/28/1970 16:47:23",
  "08/30/1985 16:47:23",
  "02/15/1945 16:47:23",
  "06/29/1985 16:47:23",
  "12/12/1960 16:47:23",
  "11/16/2020 16:47:23",
  "10/18/2010 16:47:23",
  "09/03/2007 16:47:23",
  "12/05/1985 16:47:23",
];
var newDt = [];
for (var i = 0; i < dt.length; i++) {
  newDt[i] = new Date(dt[i]);
}

// sort is a library function - the way you declare a & b determines the result to be in ascending or descending order - here the result is in descending order
newDt.sort(function (a, b) {
  return b - a;
});
