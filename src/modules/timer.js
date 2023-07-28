const timer = (deadline) => {

  const timerDays = document.querySelector('.count_1>span');
  const timerDays2 = document.querySelectorAll('.count_1>span')[1];
  const timerHours = document.querySelector('.count_2>span');
  const timerHours2 = document.querySelectorAll('.count_2>span')[1];
  const timerMinutes = document.querySelector('.count_3>span');
  const timerMinutes2 = document.querySelectorAll('.count_3>span')[1];
  const timerSeconds = document.querySelector('.count_4>span');
  const timerSeconds2 = document.querySelectorAll('.count_4>span')[1];

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return { timeRemaining, days, hours, minutes, seconds }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval)

      getTime.hours = 0;
      getTime.minutes = 0;
      getTime.seconds = 0;
    }

    timerDays.textContent = getTime.days.toString().length === 1 ? '0' + getTime.days : getTime.days;
    timerHours.textContent = getTime.hours.toString().length === 1 ? '0' + getTime.hours : getTime.hours;
    timerMinutes.textContent = getTime.minutes.toString().length === 1 ? '0' + getTime.minutes : getTime.minutes;
    timerSeconds.textContent = getTime.seconds.toString().length === 1 ? '0' + getTime.seconds : getTime.seconds;

    timerDays2.textContent = getTime.days.toString().length === 1 ? '0' + getTime.days : getTime.days;
    timerHours2.textContent = getTime.hours.toString().length === 1 ? '0' + getTime.hours : getTime.hours;
    timerMinutes2.textContent = getTime.minutes.toString().length === 1 ? '0' + getTime.minutes : getTime.minutes;
    timerSeconds2.textContent = getTime.seconds.toString().length === 1 ? '0' + getTime.seconds : getTime.seconds;
  }

  let idInterval = setInterval(updateClock, 1000);
}

export default timer;