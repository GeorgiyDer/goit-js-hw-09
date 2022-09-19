import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]')
const inputEl = document.querySelector('#datetime-picker')
const spanDays = document.querySelector('[data-days]')
const spanHours = document.querySelector('[data-hours]')
const spanMinutes = document.querySelector('[data-minutes]')
const spanSeconds = document.querySelector('[data-seconds]')
// inputEl.addEventListener('change', toFindSecetedTime)

btnStart.addEventListener('click', onBtnStartClick)


let intervalId = null;
// inputEl.addEventListener('change')
// let selectedTime;
// console.log(selectedTime);
btnStart.setAttribute('disabled', true)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (new Date().getTime() > selectedDates[0].getTime()) {
            Notiflix.Notify.warning('Please choose a date in the future');
            // alert("Please choose a date in the future");
            return
        }
        btnStart.removeAttribute('disabled')
        
    },
    
};

flatpickr("#datetime-picker", options);

function onBtnStartClick(e) { 
        intervalId = setInterval(() => {
        let counter = new Date(inputEl.value) - Date.now();
        if (counter >= 0) {
        const { days, hours, minutes, seconds } = convertMs(counter);
        spanDays.textContent = addLeadingZero(days);
        spanHours.textContent = addLeadingZero(hours);
        spanMinutes.textContent = addLeadingZero(minutes);
        spanSeconds.textContent = addLeadingZero(seconds);
        } else {

            clearInterval(intervalId);
            Notiflix.Notify.success('Finish');
        }
    }, 1000);
}

// function toFindSecetedTime(e) {
//     return e.target.value
    
// }
function addLeadingZero(value) { 
    return String(value).padStart(2, "0");
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}


