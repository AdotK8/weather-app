export default function dayOrNightChecker(sunrise, sunset, current) {
  if (current < sunrise || current > sunset) {
    return "n";
  }
  return "d";
}
