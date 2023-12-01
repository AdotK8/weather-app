export default function epochToTime(x, shift) {
  const shiftedTime = x + shift;
  const date = new Date(shiftedTime * 1000);
  const time = date.getHours();
  const day = date.getDay();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (time < 10) {
    return `${dayNames[day]}|0${time}:00`;
  }
  return `${dayNames[day]}|${time}:00`;
}
