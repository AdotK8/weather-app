import retrieveData from "./retrieveData";

const searchBar = document.querySelector("#search-bar");
const form = document.querySelector("form");

export default function searchAndSubmit() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(typeof searchBar.value);
    retrieveData(searchBar.value);
    searchBar.value = "";
  });
}
