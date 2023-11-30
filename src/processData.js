import { kelvinToCelcius, kelvinToFarr } from "./tempConvertor";
import epochToTime from "./timeConversion";
import dayOrNightChecker from "./dayOrNightChecker";

const forecastInfo = {
  temp0hrC: "",
  temp0hrF: "",
  desc0hr: "",
  time0hr: "",
  dayOrNight0hr: "",
  temp3hrC: "",
  temp3hrF: "",
  desc3hr: "",
  time3hr: "",
  dayOrNight3hr: "",
  temp6hrC: "",
  temp6hrF: "",
  desc6hr: "",
  time6hr: "",
  dayOrNight6hr: "",
  temp9hrC: "",
  temp9hrF: "",
  desc9hr: "",
  time9hr: "",
  dayOrNight9hr: "",
  temp12hrC: "",
  temp12hrF: "",
  desc12hr: "",
  time12hr: "",
  dayOrNight12hr: "",
  temp15hrC: "",
  temp15hrF: "",
  desc15hr: "",
  time15hr: "",
  dayOrNight15hr: "",
  temp18hrC: "",
  temp18hrF: "",
  desc18hr: "",
  time18hr: "",
  dayOrNight18hr: "",
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
  feelsLike: "",
  dayOrNight: "",
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
  currentInfo.feelsLike = kelvinToCelcius(currentData.main.feels_like);
  currentInfo.timezone = currentData.timezone;
  currentInfo.currentTime = epochToTime(currentData.dt, currentData.timezone);
  currentInfo.dayOrNight = dayOrNightChecker(
    currentData.sys.sunrise,
    currentData.sys.sunset,
    currentData.dt
  );
  // above is data processing for current weather
  // below is data processng for forecast weather
  forecastInfo.temp0hrC = kelvinToCelcius(forecastData.list[0].main.temp);
  forecastInfo.desc0hr = forecastData.list[0].weather[0].description;
  forecastInfo.dayOrNight0hr = forecastData.list[0].sys.pod;
  forecastInfo.time0hr = epochToTime(
    forecastData.list[0].dt,
    currentData.timezone
  );
  forecastInfo.temp3hrC = kelvinToCelcius(forecastData.list[1].main.temp);
  forecastInfo.desc3hr = forecastData.list[1].weather[0].description;
  forecastInfo.dayOrNight3hr = forecastData.list[1].sys.pod;
  forecastInfo.time3hr = epochToTime(
    forecastData.list[1].dt,
    currentData.timezone
  );
  forecastInfo.temp6hrC = kelvinToCelcius(forecastData.list[2].main.temp);
  forecastInfo.desc6hr = forecastData.list[2].weather[0].description;
  forecastInfo.dayOrNight6hr = forecastData.list[2].sys.pod;
  forecastInfo.time6hr = epochToTime(
    forecastData.list[2].dt,
    currentData.timezone
  );
  forecastInfo.temp9hrC = kelvinToCelcius(forecastData.list[3].main.temp);
  forecastInfo.desc9hr = forecastData.list[3].weather[0].description;
  forecastInfo.dayOrNight9hr = forecastData.list[3].sys.pod;
  forecastInfo.time9hr = epochToTime(
    forecastData.list[3].dt,
    currentData.timezone
  );
  forecastInfo.temp12hrC = kelvinToCelcius(forecastData.list[4].main.temp);
  forecastInfo.desc12hr = forecastData.list[4].weather[0].description;
  forecastInfo.dayOrNight12hr = forecastData.list[4].sys.pod;
  forecastInfo.time12hr = epochToTime(
    forecastData.list[4].dt,
    currentData.timezone
  );
  forecastInfo.temp15hrC = kelvinToCelcius(forecastData.list[5].main.temp);
  forecastInfo.desc15hr = forecastData.list[5].weather[0].description;
  forecastInfo.dayOrNight15hr = forecastData.list[5].sys.pod;
  forecastInfo.time15hr = epochToTime(
    forecastData.list[5].dt,
    currentData.timezone
  );
  forecastInfo.temp18hrC = kelvinToCelcius(forecastData.list[6].main.temp);
  forecastInfo.desc18hr = forecastData.list[6].weather[0].description;
  forecastInfo.dayOrNight18hr = forecastData.list[6].sys.pod;
  forecastInfo.time18hr = epochToTime(
    forecastData.list[6].dt,
    currentData.timezone
  );
  console.log(forecastInfo);
  console.log(currentInfo);
}
