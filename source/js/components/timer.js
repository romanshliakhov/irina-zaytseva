document.addEventListener('DOMContentLoaded', () => {
  const startTime = new Date().getTime() + 8 * 60 * 60 * 1000;
  const timers = document.querySelectorAll('.timer');

  const timeCount = () => {
    const currentTime = new Date().getTime();
    const remainingTime = startTime - currentTime;

    let hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    let seconds = Math.floor((remainingTime / 1000) % 60);

    if (remainingTime <= 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
      clearInterval(timerInterval);
    }

    timers.forEach(clock => {
      let hoursVal = clock.querySelector('.hours');
      let minutesVal = clock.querySelector('.minutes');
      let secondsVal = clock.querySelector('.seconds');

      hoursVal.textContent = ('0' + hours).slice(-2);
      minutesVal.textContent = ('0' + minutes).slice(-2);
      secondsVal.textContent = ('0' + seconds).slice(-2);
    });
  };

  timeCount();

  const timerInterval = setInterval(timeCount, 1000);
});
