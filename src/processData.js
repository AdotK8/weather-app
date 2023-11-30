import kelvinToCelcius from "./tempConvertor";
import epochToTime from "./timeConversion";

const forecastInfo = {
  temp0hr: "",
  desc0hr: "",
  time0hr: "",
  temp3hr: "",
  desc3hr: "",
  time3hr: "",
  temp6hr: "",
  desc6hr: "",
  time6hr: "",
  temp9hr: "",
  desc9hr: "",
  time9hr: "",
  temp12hr: "",
  desc12hr: "",
  time12hr: "",
  temp15hr: "",
  desc15hr: "",
  time15hr: "",
  temp18hr: "",
  desc18hr: "",
  time18hr: "",
};

const currentInfo = {
  city: "",
  country: "",
  currentTime: "",
  timezone: "",
  description: "",
  windSpeed: "",
  currentTemp: "",
  feelsLike: "",
};

export default function processData(forecastData, currentData) {
  //   console.log(forecastData);
  //   console.log(currentWeather);
  currentInfo.city = currentData.name;
  currentInfo.country = currentData.sys.country;
  currentInfo.description = currentData.weather[0].description;
  currentInfo.windSpeed = currentData.wind.speed;
  currentInfo.currentTemp = kelvinToCelcius(currentData.main.temp);
  currentInfo.feelsLike = kelvinToCelcius(currentData.main.feels_like);
  currentInfo.timezone = currentData.timezone;
  currentInfo.currentTime = epochToTime(currentData.dt, currentData.timezone);
  // above is data processing for current weather
  // below is data processng for forecast weather
  forecastInfo.temp0hr = kelvinToCelcius(forecastData.list[0].main.temp);
  forecastInfo.desc0hr = forecastData.list[0].weather[0].description;
  forecastInfo.time0hr = epochToTime(
    forecastData.list[0].dt,
    currentData.timezone
  );
  forecastInfo.temp3hr = kelvinToCelcius(forecastData.list[1].main.temp);
  forecastInfo.desc3hr = forecastData.list[1].weather[0].description;
  forecastInfo.time3hr = epochToTime(
    forecastData.list[1].dt,
    currentData.timezone
  );
  forecastInfo.temp6hr = kelvinToCelcius(forecastData.list[2].main.temp);
  forecastInfo.desc6hr = forecastData.list[2].weather[0].description;
  forecastInfo.time6hr = epochToTime(
    forecastData.list[2].dt,
    currentData.timezone
  );
  forecastInfo.temp9hr = kelvinToCelcius(forecastData.list[3].main.temp);
  forecastInfo.desc9hr = forecastData.list[3].weather[0].description;
  forecastInfo.time9hr = epochToTime(
    forecastData.list[3].dt,
    currentData.timezone
  );
  forecastInfo.temp12hr = kelvinToCelcius(forecastData.list[4].main.temp);
  forecastInfo.desc12hr = forecastData.list[4].weather[0].description;
  forecastInfo.time12hr = epochToTime(
    forecastData.list[4].dt,
    currentData.timezone
  );
  forecastInfo.temp15hr = kelvinToCelcius(forecastData.list[5].main.temp);
  forecastInfo.desc15hr = forecastData.list[5].weather[0].description;
  forecastInfo.time15hr = epochToTime(
    forecastData.list[5].dt,
    currentData.timezone
  );
  forecastInfo.temp18hr = kelvinToCelcius(forecastData.list[6].main.temp);
  forecastInfo.desc18hr = forecastData.list[6].weather[0].description;
  forecastInfo.time18hr = epochToTime(
    forecastData.list[6].dt,
    currentData.timezone
  );
  console.log(forecastInfo);
  console.log(currentInfo);
}
