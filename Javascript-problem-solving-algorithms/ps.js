const startThatClock = () => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  if (time.substring(0, 1) > 1) {
    time.replace(/^/, "0");
  }
  document.getElementById("p1").innerHTML = time.substring(0, 2);
  document.getElementById("p2").innerHTML = time.substring(2, 3);
  document.getElementById("p3").innerHTML = time.substring(3, 5);
  document.getElementById("p4").innerHTML = time.substring(5, 6);
  document.getElementById("p5").innerHTML = time.substring(6, 8);
};

let timeInterval;

const startTimeClock = () => {
  timeInterval = setInterval(startThatClock, 1000);
};

const stopTimeClock = () => {
  clearInterval(timeInterval);
};
