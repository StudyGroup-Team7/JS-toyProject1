const secondEl = document.querySelector('.second')
const milliSecondEl = document.querySelector('.milli-second')

let sec = '00'
let msec = '00'

window.addEventListener('DOMContentLoaded', function () {
  secondEl.innerHTML = sec
  milliSecondEl.innerHTML = msec
})
