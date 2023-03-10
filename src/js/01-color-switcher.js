function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  let interval = null;

// const btns = {startBtn: document.querySelector('[data-start]'), stopBtn:document.querySelector('[data-stop]')}
// // btns.startBtn
// console.log('btns.startBtn: ', btns.startBtn);

const body = document.body;
const startBtn =  document.querySelector('[data-start]')
const stopBtn =  document.querySelector('[data-stop]')

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

stopBtn.disabled = true;

function handleStart({target}) {
    interval = setInterval(() => {
        changeColor(body)
    }, 1000);

    // target.classList.add('inactive');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    // console.log('target: ', target);
    startBtn.removeEventListener('click', handleStart);
}

function handleStop() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;

    startBtn.addEventListener('click', handleStart);

    // console.log('interval stopped');
}

function changeColor(elem) {
    elem.style.backgroundColor = getRandomHexColor();
}