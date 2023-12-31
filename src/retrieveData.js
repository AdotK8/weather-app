import processData from "./processData";

const searchBar = document.querySelector("#search-bar");

export default async function retrieveData(location) {
  const apiKey = "cb561535d4382bd95e0f2ab965974e4e";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; // current
  searchBar.setAttribute("placeholder", "");
  searchBar.classList.add("valid");
  searchBar.classList.remove("error");
  try {
    const response1 = await fetch(url, { mode: "cors" });
    const response2 = await fetch(url2, { mode: "cors" });
    const forecastData = await response1.json();
    const currentData = await response2.json();
    processData(forecastData, currentData);
    searchBar.setAttribute("placeholder", "Which city are you looking for?");
  } catch (err) {
    searchBar.classList.add("error");
    searchBar.classList.remove("valid");
    searchBar.setAttribute(
      "placeholder",
      "Could not find city, please try again"
    );
  }
}
