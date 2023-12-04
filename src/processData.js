import { kelvinToCelcius, kelvinToFarr } from "./tempConvertor";
import epochToTime from "./timeConversion";
import { updateTemps, updateTimes, updateCurrentInfo } from "./displayToDom";
import updateImages from "./imageUpdater";

const forecastInfo = {
  0: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  1: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  2: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  3: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  4: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  5: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
  6: {
    tempC: "",
    description: "",
    time: "",
    icon: "",
  },
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
  forecastInfo["0"].tempC = kelvinToCelcius(forecastData.list[0].main.temp);
  forecastInfo["0"].tempF = kelvinToFarr(forecastData.list[0].main.temp);
  forecastInfo["0"].description = forecastData.list[0].weather[0].description;
  forecastInfo["0"].icon = forecastData.list[0].weather[0].icon;
  forecastInfo["0"].time = epochToTime(
    forecastData.list[0].dt,
    currentData.timezone
  );
  forecastInfo["1"].tempC = kelvinToCelcius(forecastData.list[1].main.temp);
  forecastInfo["1"].tempF = kelvinToFarr(forecastData.list[1].main.temp);
  forecastInfo["1"].description = forecastData.list[1].weather[0].description;
  forecastInfo["1"].icon = forecastData.list[1].weather[0].icon;
  forecastInfo["1"].time = epochToTime(
    forecastData.list[1].dt,
    currentData.timezone
  );
  forecastInfo["2"].tempC = kelvinToCelcius(forecastData.list[2].main.temp);
  forecastInfo["2"].tempF = kelvinToFarr(forecastData.list[2].main.temp);
  forecastInfo["2"].description = forecastData.list[2].weather[0].description;
  forecastInfo["2"].icon = forecastData.list[2].weather[0].icon;
  forecastInfo["2"].time = epochToTime(
    forecastData.list[2].dt,
    currentData.timezone
  );
  forecastInfo["3"].tempC = kelvinToCelcius(forecastData.list[3].main.temp);
  forecastInfo["3"].tempF = kelvinToFarr(forecastData.list[3].main.temp);
  forecastInfo["3"].description = forecastData.list[3].weather[0].description;
  forecastInfo["3"].icon = forecastData.list[3].weather[0].icon;
  forecastInfo["3"].time = epochToTime(
    forecastData.list[3].dt,
    currentData.timezone
  );
  forecastInfo["4"].tempC = kelvinToCelcius(forecastData.list[4].main.temp);
  forecastInfo["4"].tempF = kelvinToFarr(forecastData.list[4].main.temp);
  forecastInfo["4"].description = forecastData.list[4].weather[0].description;
  forecastInfo["4"].icon = forecastData.list[4].weather[0].icon;
  forecastInfo["4"].time = epochToTime(
    forecastData.list[4].dt,
    currentData.timezone
  );
  forecastInfo["5"].tempC = kelvinToCelcius(forecastData.list[5].main.temp);
  forecastInfo["5"].tempF = kelvinToFarr(forecastData.list[5].main.temp);
  forecastInfo["5"].description = forecastData.list[5].weather[0].description;
  forecastInfo["5"].icon = forecastData.list[5].weather[0].icon;
  forecastInfo["5"].time = epochToTime(
    forecastData.list[5].dt,
    currentData.timezone
  );
  forecastInfo["6"].tempC = kelvinToCelcius(forecastData.list[6].main.temp);
  forecastInfo["6"].tempF = kelvinToFarr(forecastData.list[6].main.temp);
  forecastInfo["6"].description = forecastData.list[6].weather[0].description;
  forecastInfo["6"].icon = forecastData.list[6].weather[0].icon;
  forecastInfo["6"].time = epochToTime(
    forecastData.list[6].dt,
    currentData.timezone
  );
  // console.log(forecastInfo);
  console.log(currentInfo);

  updateTemps();
  updateTimes();
  updateCurrentInfo();
  updateImages();
}

export { forecastInfo, currentInfo };
