import { forecastInfo, currentInfo } from "./processData";

export function updateTemps() {
  const currentTempDOM = document.querySelector("#current-temp");
  currentTempDOM.innerHTML = `${currentInfo.currentTemp}&deg;${currentInfo.tempUnit}`;

  const feelsLikeDOM = document.querySelector("#feels-like");
  feelsLikeDOM.innerHTML = `Feels Like: ${currentInfo.feelsLike}&deg;${currentInfo.tempUnit}`;

  const forecastTempDOM = document.querySelectorAll(".forecast-temp");

  for (let i = 0; i < forecastTempDOM.length; i++) {
    forecastTempDOM[i].innerHTML = `${forecastInfo[`${i}`].temp}&deg;${
      currentInfo.tempUnit
    }`;
  }
}

export function updateTimes() {
  const currentTimeDom = document.querySelector("#date");
  currentTimeDom.innerHTML = currentInfo.currentTime;

  const forecastTimeDOM = document.querySelectorAll(".forecast-time");

  for (let i = 0; i < forecastTimeDOM.length; i++) {
    forecastTimeDOM[i].innerHTML = forecastInfo[i].time;
  }
}

export function updateCurrentInfo() {
  const cityDOM = document.querySelector("#city");
  const descriptionDOM = document.querySelector("#description");
  const windSpeedDOM = document.querySelector("#wind-speed");

  cityDOM.innerHTML = `${currentInfo.city}, ${currentInfo.country}`;
  descriptionDOM.innerHTML = currentInfo.description;
  windSpeedDOM.innerHTML = `Wind Speed: ${currentInfo.windSpeed}m/s`;
}
