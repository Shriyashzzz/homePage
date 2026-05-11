import "normalize.css";
import "./style.css";

import "./bobTheblob.js";
import "./nav.js";

window.onload = () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".Content");
  setTimeout(() => {
    content.style.display = "block";
    loader.style.display = "none";
  }, 1000);
};
