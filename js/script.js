// outputArea = document.getElementById('output');

// clearButton = document.getElementById('btn-clear');
// clearButton.addEventListener('click', function () {
//   outputArea.innerHTML = '0';
// })

// oppositeButton = document.getElementById('btn-opposite');
// oppositeButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) * -1;
// })

// percentButton = document.getElementById('btn-percent');
// percentButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) / 100;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// eightButton = document.getElementById('btn-nine');
// eightButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

// nineButton = document.getElementById('btn-nine');
// nineButton.addEventListener('click', function () {
//   outputArea.innerHTML = parseFloat(outputArea.innerHTML) + 9;
// })

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }
  }
})




