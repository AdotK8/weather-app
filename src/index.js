import retrieveData from "./retrieveData";
import "./styles/styles.css";
import searchAndSubmit from "./searchButton";
import toggleButton from "./tempConversionButton";
import gitPic from "./images/github.svg";
import magPic from "./images/magnify.svg";

const git = document.getElementById("git");
const mag = document.getElementById("magnify-icon");

git.src = gitPic;
mag.src = magPic;

retrieveData("london");
searchAndSubmit();
toggleButton();
