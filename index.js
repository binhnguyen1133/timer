const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var date = new Date();
const month = months[date.getMonth()];
const dayName = day[date.getDay() - 1];
const dayNum = date.getDate();
const year = date.getFullYear();

const getMonth = document.getElementsByClassName("month-name")[0];
getMonth.innerHTML = month;

const getDayName = document.getElementsByClassName("day-name")[0];
getDayName.innerHTML = dayName;

const getDayNum = document.getElementsByClassName("day-num")[0];
getDayNum.innerHTML = dayNum;

const getYear = document.getElementsByClassName("year")[0];
getYear.innerHTML = year;

function time() {
  var d = new Date();
  var hour = document.getElementsByClassName("hour")[0];
  var minute = document.getElementsByClassName("minute")[0];
  var second = document.getElementsByClassName("second")[0];
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}

var interval = setInterval(time,1000);