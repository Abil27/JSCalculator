outputArea = document.getElementById('output');

clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function () {
  outputArea.innerHTML = '0';
})

oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', function () {
  outputArea.innerHTML = parseFloat(outputArea.innerHTML) * -1;
})

percentButton = document.getElementById('btn-percent');
percentButton.addEventListener('click', function () {
  outputArea.innerHTML = parseFloat(outputArea.innerHTML) / 100;
})


