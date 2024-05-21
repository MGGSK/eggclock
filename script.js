let egg = 0;
let timerStarted = false;

function switchtime() {
  if (egg == 0) {
    timew.innerHTML = "02 : 30";
    egg = 1;
  } else {
    timew.innerHTML = "05 : 00";
    egg = 0;
  }
}

function start() {
  if (!timerStarted) {
    timerStarted = true;
    let startTime = new Date().getTime();
    let endTime;
    let sound = new Audio("alarm.mp3");

    if (egg == 1) {
      let fiveMinutes = 1000 * 60 * 2 + 1000 * 30;
      endTime = startTime + fiveMinutes;
    } else {
      let fiveMinutes = 1000 * 60 * 5;
      endTime = startTime + fiveMinutes;
    }

    setInterval(function () {
      let timeLeft = endTime - new Date().getTime();

      if (timeLeft > 0) {
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ("0" + seconds).slice(-2);
        let text = "0" + minutes + " : " + seconds;
        timew.innerHTML = text;
      } else {
        timew.innerHTML = "00 : 00";
        sound.play();
      }
    }, 1000);
  }
}
