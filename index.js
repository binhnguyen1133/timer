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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var date = new Date();
const month = months[date.getMonth()];
const dayName = day[date.getDay()];
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
  h = ("0" + h).slice(-2);
  var m = d.getMinutes();
  m = ("0" + m).slice(-2);
  var s = d.getSeconds();
  s = ("0" + s).slice(-2);

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}

var interval = setInterval(time, 1000);
