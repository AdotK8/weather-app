import { kelvinToCelcius, kelvinToFarr } from "./tempConvertor";
import epochToTime from "./timeConversion";
import { updateTemps, updateTimes, updateCurrentInfo } from "./displayToDom";
import updateImages from "./imageUpdater";

// initialising object to store forecast info
const forecastInfo = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
};

// initialising object to store current info with default unit of Celcius
const currentInfo = {
  tempUnit: "C",
};

export default function processData(forecastData, currentData) {
  // processing data for current weather information
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
  // processing data for forecast weather information
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
  // displaying newly processed data
  updateTemps();
  updateTimes();
  updateCurrentInfo();
  updateImages();
}

export { forecastInfo, currentInfo };
