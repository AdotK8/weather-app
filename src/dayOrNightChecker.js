// this function takes epoch time and determines if it is currently day or night
export default function dayOrNightChecker(sunrise, sunset, current) {
  if (current < sunrise || current > sunset) {
    return "n";
  }
  return "d";
}
