const btnStart = document.querySelector("[data-start]")
const btnStop = document.querySelector("[data-stop]")
const body = document.querySelector("body")

btnStart.addEventListener('click', OnBtnStartClick)
btnStop.addEventListener('click', OnBtnStopClick)

btnStop.setAttribute('disabled', true)
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function OnBtnStartClick(e) {
    timerId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    btnStart.setAttribute('disabled', true)
    btnStop.removeAttribute('disabled')
}

function OnBtnStopClick(e) {
    clearInterval(timerId)
    btnStop.setAttribute('disabled', true)
    btnStart.removeAttribute('disabled')
}