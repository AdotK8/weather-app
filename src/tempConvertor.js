function kelvinToCelcius(K) {
  const C = K - 273.15;
  return C.toFixed();
}

function kelvinToFarr(K) {
  const F = (K - 273.15) * 1.8 + 32;
  return F.toFixed(1);
}

export { kelvinToCelcius, kelvinToFarr };
