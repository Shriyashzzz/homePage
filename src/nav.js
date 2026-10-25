(() => {
  // connect menu (github, linkedin, blog)
  const dropdownContainer = document.querySelector(".dropdown-container");
  const menuTitle = document.querySelector(".menu-title");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  function setMenu(open) {
    dropdownMenu.classList.toggle("visible", open);
    menuTitle.setAttribute("aria-expanded", String(open));
  }

  menuTitle.addEventListener("click", () => {
    setMenu(!dropdownMenu.classList.contains("visible"));
  });

  window.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) setMenu(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // close menu after following a link
  dropdownMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
})();
