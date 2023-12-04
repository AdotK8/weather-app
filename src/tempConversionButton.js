import { updateTemps } from "./displayToDom";
import { currentInfo } from "./processData";

const tempButton = document.querySelector(".button");

export default function toggleButton() {
  tempButton.addEventListener("click", () => {
    tempButton.classList.toggle("celcius");
    tempButton.classList.toggle("farrenheit");

    if (currentInfo.tempUnit === "C") {
      currentInfo.tempUnit = "F";
      updateTemps();
    } else if (currentInfo.tempUnit === "F") {
      currentInfo.tempUnit = "C";
      updateTemps();
    }
  });
}
