let hour = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let swHolder = document.querySelector('.stopwatch');

let sec_count = 0;
let min_count = 1;
let hour_count = 1;
let pause = false;

swHolder.addEventListener('click', function(e) {
	if(e.target.value == 'start') {
    pause = false;
  	getSeconds();
    e.disabled = true;
  } else if(e.target.value == 'pause') {
  	pause = true;
  } else if(e.target.value == 'reset') {
    pause = true;
    resetTimer();
  }
});

function resetTimer() {
	sec_count = 0;
  min_count = 1;
  hour_count = 1;
  sec.textContent = '00';
  min.textContent = '00';
  hour.textContent = '00';
}

function getSeconds() {
	if(sec_count <= 59 && pause == false) {
    if(sec_count.toString().length == 1) {
      sec.textContent = `0${sec_count}`;
    } else {
      sec.textContent = sec_count;
    }
    sec_count++;
    setTimeout(() => {
      getSeconds();
    }, 1000);
  } else if(pause == false) {
    sec_count = 0;
    if(sec_count.toString().length == 1) {
      sec.textContent = `0${sec_count}`;
    } else {
      sec.textContent = sec_count;
    }
    getSeconds();
    getMinutes();
  }
}

function getMinutes() {
  if (min_count <= 59) {
    if(min_count.toString().length == 1) {
      min.textContent = `0${min_count}`;
    } else {
      min.textContent = min_count;
    }
    min_count++;
  } else {
    min_count = 0;
    if(min_count.toString().length == 1) {
      min.textContent = `0${min_count}`;
    } else {
      min.textContent = min_count;
    }
    min_count = 1;
    getHours();
  }
}

function getHours() {
  if(hour_count.toString().length == 1) {
    hour.textContent = `0${hour_count}`;
  } else {
    hour.textContent = hour_count;
  }
  hour_count++;
}