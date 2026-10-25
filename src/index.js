import "normalize.css";
import "./style.css";
import "./bobTheblob.js";
import "./router.js";
import "./nav.js";
import { inject } from "@vercel/analytics";

inject();

// footer
document.getElementById("footerYear").textContent = new Date().getFullYear();
document.querySelector(".backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// styles are injected by now, so swap the loader for the page
document.querySelector(".loader").remove();
document.querySelector(".Content").style.display = "block";
