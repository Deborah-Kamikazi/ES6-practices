function dotest(seconds) {
  let remainder = 0;
  if (seconds === 0) return "now";
  let time = {
    years: 0,
    Days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  while (seconds > 0) {
    if (seconds >= 31536000) {
      getyears();
    } else if (seconds >= 86400) {
      getDays();
    } else if (seconds >= 3600) {
      gethours();
    } else if (seconds >= 60) {
      getminutes();
    } else if (seconds < 60) {
      getSeconds();
    }
  }
  function getyears() {
    let year = Math.floor(seconds / 31536000);
    seconds = seconds % 31536000;
    time.years = year;
  }
  function getDays() {
    let day = Math.floor(seconds / 86400);
    seconds = seconds % 86400;
    time.Days = day;
  }
  function gethours() {
    let hour = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    time.hours = hour;
  }
  function getminutes() {
    let minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    time.minutes = minute;
  }
  function getSeconds(){
    time.seconds = seconds;
    seconds =0 
  }
  let outPut = [];
  if (time.years > 0) {
    time.years > 1
      ? outPut.push(`${time.years} years`)
      : outPut.push(` ${time.years} year`);
  }
  if (time.Days > 0) {
    time.Days > 1
      ? outPut.push(` ${time.Days}  days`)
      : outPut.push(` ${time.Days} day`);
  }
  if (time.hours > 0) {
    time.hours > 1
      ? outPut.push(` ${time.hours}  hours`)
      : outPut.push(` ${time.hours} hour`);
  }
  if (time.minutes > 0) {
    time.minutes > 1
      ? outPut.push(` ${time.minutes}  minutes`)
      : outPut.push(` ${time.minutes} minute`);
  }
  if (time.seconds > 0) {
    time.seconds > 1
      ? outPut.push(` ${time.seconds}  seconds`)
      : outPut.push(` ${time.seconds} second`);
  }
  let outputStr;
  if (outPut.length > 1) {
    let lastEl = outPut.slice(outPut.length - 1);
    outPut.pop();
    outputStr = outPut.join(",") + " and " + lastEl[0];
    return outputStr;
  }
  return outPut;
}
console.log(dotest(360430));
