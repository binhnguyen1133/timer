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

const date = new Date();
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

