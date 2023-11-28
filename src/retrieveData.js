const location = "san francisco";

export default async function retrieveData() {
  const apiKey = "cb561535d4382bd95e0f2ab965974e4e";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour

  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(`City: ${weatherData.city.name}`);
    console.log(`Country: ${weatherData.city.country}`);
    console.log(`Description: ${weatherData.list[0].weather[0].description}`);
    console.log(`Wind Speed: ${weatherData.list[0].wind.speed}`);
    console.log(`Temp Now: ${weatherData.list[0].main.temp}`);
    console.log(`Feels Like: ${weatherData.list[0].main.feels_like}`);
    console.log(`Temp 3hr: ${weatherData.list[1].main.temp}`);
    console.log(
      `Description 3hr: ${weatherData.list[1].weather[0].description}`
    );
    console.log(`Temp 6hr: ${weatherData.list[2].main.temp}`);
    console.log(
      `Description 6hr: ${weatherData.list[2].weather[0].description}`
    );
    console.log(`Temp 9hr: ${weatherData.list[3].main.temp}`);
    console.log(
      `Description 9hr: ${weatherData.list[3].weather[0].description}`
    );
    console.log(`Temp 12hr: ${weatherData.list[4].main.temp}`);
    console.log(
      `Description 12hr: ${weatherData.list[4].weather[0].description}`
    );
    console.log(`Temp 15hr: ${weatherData.list[5].main.temp}`);
    console.log(
      `Description 15hr: ${weatherData.list[5].weather[0].description}`
    );
    console.log(`Temp 18hr: ${weatherData.list[6].main.temp}`);
    console.log(
      `Description 18hr: ${weatherData.list[6].weather[0].description}`
    );
  } catch (err) {
    console.log(err);
  }
}
