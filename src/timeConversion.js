export default function epochToTime(x, shift) {
  const shiftedTime = x + shift;
  const date = new Date(shiftedTime * 1000);
  const time = date.getHours();
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

