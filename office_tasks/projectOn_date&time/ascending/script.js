console.log("displaying dates in ascending order");

let dt = [
  "17/12/2020 17:11:23",
  "05/06/1920 16:11:23",
  "05/06/1980 16:15:23",
  "05/07/1985 16:47:23",
  "28/05/1970 16:47:23",
  "30/08/1985 16:47:23",
  "15/02/1945 16:47:23",
  "29/06/1985 16:47:23",
  "12/12/1960 16:47:23",
  "16/11/2020 16:47:23",
  "18/10/2010 16:47:23",
  "03/09/2007 16:47:23",
  "05/12/1985 16:47:23",
];

//arranging in ascending order - basing on year - start
for (var i = dt.length - 1; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    var temp1 = dt[j].substr(6, 4);
    temp1 = parseInt(temp1);
    var temp2 = dt[j + 1].substr(6, 4);
    temp2 = parseInt(temp2);
    if (temp1 > temp2) {
      var temp = dt[j + 1];
      dt[j + 1] = dt[j];
      dt[j] = temp;
    }
  }
}
//end

//creating array with just years - start
var years = [];
for (var i = 0; i < dt.length; i++) {
  var temp = dt[i].substr(6, 4);
  years[i] = temp;
}
//end

//code to rearrange the data with respect to month - ascending order - start
var i = 0;
while (i < dt.length) {
  var start = i;
  var end = i;
  do {
    //it will pick up the start and end values checked through if
    if (years[i] == years[++i]) {
      end = i;
    }
  } while (end == i);

  if (start != end) {
    //now it will run a code here, to arrange it in order
    console.log(years[end]);
    rearrangeByMonth(start, end);
    rearrangeByDate(start, end);
  }
}
//end

//actual function containing algorithm to rearrange the date with respect to month - in ascending order - start
function rearrangeByMonth(start, end) {
  console.log(start, end);
  for (var i = end; i > start; i--) {
    for (var j = start; j < i; j++) {
      var temp1 = dt[j].substr(3, 2);
      temp1 = parseInt(temp1);
      var temp2 = dt[j + 1].substr(3, 2);
      temp2 = parseInt(temp2);
      if (temp1 > temp2) {
        var temp = dt[j + 1];
        dt[j + 1] = dt[j];
        dt[j] = temp;
      }
    }
  }
}
//end

//actual function containing algorithm to rearrange the date with respect to date - in ascending order - start
function rearrangeByDate(start, end) {
  console.log(start, end);
  for (var i = end; i > start; i--) {
    for (var j = start; j < i; j++) {
      var temp1 = dt[j].substr(0, 2);
      temp1 = parseInt(temp1);
      var temp2 = dt[j + 1].substr(0, 2);
      temp2 = parseInt(temp2);
      if (temp1 > temp2) {
        var temp = dt[j + 1];
        dt[j + 1] = dt[j];
        dt[j] = temp;
      }
    }
  }
}
//end
