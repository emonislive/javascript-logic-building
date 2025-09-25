// ! Write a program that creates a basic alarm clock
// ??? First install "npm install prompt-sync"

function alarm(hour, min) {
  hour = parseInt(hour);
  min = parseInt(min);

  if (!(hour >= 0 && hour <= 23) && min >= 0 && min <= 59) {
    throw new RangeError(
      "The value is not in the range. Hour: (0-23) & Minute: (0-59)"
    );
  }

  const alarmSetOn = new Date();
  const currentTime = new Date();

  alarmSetOn.setHours(hour);
  alarmSetOn.setMinutes(min);

  const difference = alarmSetOn - currentTime;

  if (difference < 0) {
    console.log("Provide a future time.");
    return;
  }
  console.log("Alarm set on:", alarmSetOn, difference / 60000, "min left");

  setTimeout(() => {
    console.log("Wake Up!!! [Alarm Ringing...]");
  }, difference);
}

const prompt = require("prompt-sync")();
const hour = prompt("Enter Hour: ");
const min = prompt("Enter Minute: ");

alarm(hour, min);
