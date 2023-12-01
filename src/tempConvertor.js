function kelvinToCelcius(K) {
  const C = K - 273.15;
  // return `${Math.round(C * 10) / 10}9\xB0C`;
  // return `${C.toFixed()}9\xB0C`;
  return C.toFixed();
}

function kelvinToFarr(K) {
  const F = (K - 273.15) * 1.8 + 32;
  // return `${Math.round(F * 10) / 10}9\xB0F`;
  return F.toFixed();
}

export { kelvinToCelcius, kelvinToFarr };
