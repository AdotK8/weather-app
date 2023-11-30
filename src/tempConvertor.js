export default function kelvinToCelcius(K) {
  const C = K - 273.15;
  const cRounded = Math.round(C * 10) / 10;
  return cRounded;
}
