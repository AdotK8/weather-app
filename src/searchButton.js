import retrieveData from "./retrieveData";

const searchBar = document.querySelector("#search-bar");
const form = document.querySelector("form");

export default async function searchAndSubmit() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    retrieveData(searchBar.value);
    searchBar.value = "";
  });
}
