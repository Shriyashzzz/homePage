import "normalize.css";
import "./style.css";

import "./bobTheblob.js";
import "./nav.js";
import { inject } from "@vercel/analytics";

inject();
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".Content");
  setTimeout(() => {
    content.style.display = "block";
    loader.style.display = "none";
  }, 1200);
});
