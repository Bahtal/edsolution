//checkbox

const checkboxInput = document.getElementById('checkbox-input');
const checkedSvg = document.querySelector('.checked');
const uncheckedSvg = document.querySelector('.unchecked');

checkboxInput.addEventListener('change', function() {
  if (checkboxInput.checked) {
    checkedSvg.style.display = 'block';
    uncheckedSvg.style.display = 'none';
  } else {
    checkedSvg.style.display = 'none';
    uncheckedSvg.style.display = 'block';
  }
});


// Timer

let timerElement = document.getElementById('timer');
let hoursElement = document.querySelector('.hours');
let minutesElement = document.querySelector('.minutes');
let secondsElement = document.querySelector('.seconds');

let time = 30 * 60;

function updateTimerDisplay() {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	let hours = Math.floor(time / 3600);

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

function startTimer() {
		setInterval(() => {
   	 time--;
			if(time < 0) {
				time = 30 * 60;
			}

    updateTimerDisplay();
  }, 1000);
}


updateTimerDisplay()
startTimer();


