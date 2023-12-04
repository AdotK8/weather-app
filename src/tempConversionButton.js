import { celciusToFarr } from "./tempConvertor";
import { currentInfo, forecastInfo } from "./processData";
import { updateTemps } from "./displayToDom";

const tempButton = document.querySelector(".button");

export default function toggleButton() {
  tempButton.addEventListener("click", () => {
    tempButton.classList.toggle("celcius");
    tempButton.classList.toggle("farrenheit");

    if (currentInfo.tempUnit === "C") {
      currentInfo.tempUnit = "F";
      console.log(currentInfo);
      updateTemps();
    } else if (currentInfo.tempUnit === "F") {
      currentInfo.tempUnit = "C";
      console.log(currentInfo);
      updateTemps();
    }
  });
}
