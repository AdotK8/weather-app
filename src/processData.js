import { kelvinToCelcius, kelvinToFarr } from "./tempConvertor";
import epochToTime from "./timeConversion";
import { updateTemps, updateTimes, updateCurrentInfo } from "./displayToDom";
import updateImages from "./imageUpdater";

const forecastInfo = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
};

const currentInfo = {
  city: "",
  country: "",
  currentTime: "",
  timezone: "",
  description: "",
  windSpeed: "",
  currentTempC: "",
  currentTempF: "",
  feelsLikeC: "",
  feelsLikeF: "",
  tempUnit: "C",
  icon: "",
};

export default function processData(forecastData, currentData) {
  // console.log(forecastData);
  // console.log(currentData);
  currentInfo.city = currentData.name;
  currentInfo.country = currentData.sys.country;
  currentInfo.description = currentData.weather[0].description;
  currentInfo.windSpeed = currentData.wind.speed;
  currentInfo.currentTempC = kelvinToCelcius(currentData.main.temp);
  currentInfo.currentTempF = kelvinToFarr(currentData.main.temp);
  currentInfo.feelsLikeC = kelvinToCelcius(currentData.main.feels_like);
  currentInfo.feelsLikeF = kelvinToFarr(currentData.main.feels_like);
  currentInfo.timezone = currentData.timezone;
  currentInfo.currentTime = epochToTime(currentData.dt, currentData.timezone);
  currentInfo.icon = currentData.weather[0].icon;
  // above is data processing for current weather

  // below is data processng for forecast weather
  for (let i = 0; i <= 6; i++) {
    forecastInfo[i].tempC = kelvinToCelcius(forecastData.list[i].main.temp);
    forecastInfo[i].tempF = kelvinToFarr(forecastData.list[i].main.temp);
    forecastInfo[i].description = forecastData.list[i].weather[0].description;
    forecastInfo[i].icon = forecastData.list[i].weather[0].icon;
    forecastInfo[i].time = epochToTime(
      forecastData.list[i].dt,
      currentData.timezone
    );
  }
  // console.log(forecastInfo);
  // console.log(currentInfo);

  updateTemps();
  updateTimes();
  updateCurrentInfo();
  updateImages();
}

export { forecastInfo, currentInfo };
