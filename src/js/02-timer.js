// const flatpickr = require("flatpickr");
// import flatpickr from "flatpickr";

import Notiflix from 'notiflix';

// Notiflix.Notify.failure('NPM import of flatpickr (commented in code) does not work and displaces DIV content. \nUsed HTML script import instead', {messageMaxLength: '150',height: '400px', width: '800px', position:'center-top', fontSize: '24px', timeout: '10000', clickToClose: 'true'});
const datePicker = document.querySelector("#datetime-picker");

// let difval = {days:0, hours:0, minutes:0, seconds:0,};
let dif = 0;
let interval = null;
const display = {days:document.querySelector('[data-days]'), hours:document.querySelector('[data-hours]'),minutes:document.querySelector('[data-minutes]'),seconds:document.querySelector('[data-seconds]'),}
const btn = document.querySelector('button')
btn.disabled = true;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.warning('Please select date in the past!', {position:'center-top'})
        return;
      }
      if (selectedDates[0] > Date.now()) {
        btn.disabled = false;
        btn.addEventListener('click', handleSubmit)
        dif = selectedDates[0] - Date.now();
        return;
      }
    },
  };
  flatpickr(datePicker, options).onClose



function handleSubmit(e) {
  e.preventDefault()
  setCountdown(dif);
  btn.removeEventListener('click', handleSubmit);
  // btn.classList.add('inactive');

  btn.disabled = true;

}

function setCountdown(dif) {
  interval = setInterval(() => {
    setData(dif)
    dif -= 1000;

    if (dif < 0) {
      Notiflix.Notify.success("Відлік завершено!")
      clearInterval(interval);
    }
}, 1000);
}

function setData(dif) {
  const {days, hours, minutes, seconds} = convertMs(dif);
  // console.log('convertMs(dif): ', convertMs(dif));
  display.days.textContent = addLeadingZero(days);
  display.hours.textContent = addLeadingZero(hours);
  display.minutes.textContent = addLeadingZero(minutes);
  display.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  value+="";
  return value.padStart(2,'0');
}