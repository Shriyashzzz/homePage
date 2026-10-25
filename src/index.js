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
  // body is the scroll container (html has overflow hidden)
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".Content");
  setTimeout(() => {
    content.style.display = "block";
    loader.style.display = "none";
  }, 1200);
});
