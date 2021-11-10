const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  const time = new Date(2021, 10, 9, 0, 0);
  
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  console.log(deltaMinutes);
  
  time.setMinutes(deltaMinutes);

  return `${padWithZeroes(time.getHours(), 2)}:${padWithZeroes(time.getMinutes(), 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}
