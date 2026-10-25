(() => {
  // opensquick dive menu when clicked
  const dropdownContainer = document.querySelector(".dropdown-container");
  const menuTitle = document.querySelector(".menu-title");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuTitle.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      dropdownMenu.classList.toggle("visible");
    }
  });

  window.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.classList.remove("visible");
    }
  });

  //   close menu after clicking on quick link

  const skipLinks = document.querySelectorAll(".navLink");

  skipLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      dropdownMenu.classList.remove("visible");

      // contact lives in the footer on every view, so scroll instead of routing
      if (link.dataset.scroll) {
        e.preventDefault();
        document
          .getElementById(link.dataset.scroll)
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const nav = document.querySelector("nav");
  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.5,
  };

  const navObserver = new IntersectionObserver(showNav, options);
  const heroSection = document.getElementById("about-content");
  navObserver.observe(heroSection);
  function showNav(entries) {
    entries.forEach((entry) => {
      if (entry.target.id == "about-content" && !entry.isIntersecting) {
        nav.classList.add("navshow");
      } else {
        nav.classList.remove("navshow");
      }
    });
  }
})();
