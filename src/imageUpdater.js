import { currentInfo, forecastInfo } from "./processData";

export default function updateImages() {
  const mainIconDOM = document.querySelector("#current-image");
  const mainUrl = `https://openweathermap.org/img/wn/${currentInfo.icon}@2x.png`;
  mainIconDOM.setAttribute("src", mainUrl);

  const forecastIconsDOM = document.querySelectorAll("#forecast-image");

  for (let i = 0; i < forecastIconsDOM.length; i++) {
    const forecastUrl = `https://openweathermap.org/img/wn/${forecastInfo[i].icon}@2x.png`;
    forecastIconsDOM[i].setAttribute("src", forecastUrl);
  }
}
