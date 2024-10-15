const timer= document.querySelector('.timer')

const days= document.querySelector('.days')
const hours= document.querySelector('.hours')
const minutes= document.querySelector('.minutes')
const seconds= document.querySelector('.seconds')

var countDownDate = new Date("Aug 16, 2034 00:00:01").getTime();

let x = setInterval(function() {

  let todaysData = new Date().getTime();

  let difference = countDownDate - todaysData;

  let numberOfDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  let numberOfHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let numberOfMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let numberOfSeconds = Math.floor((difference % (1000 * 60)) / 1000);
  days.innerHTML = numberOfDays;
  hours.innerHTML = numberOfHours ;
  minutes.innerHTML = numberOfMinutes;
  seconds.innerHTML = numberOfSeconds;
}, 1000);
