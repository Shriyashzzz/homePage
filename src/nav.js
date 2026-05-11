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
    link.addEventListener("click", () => {
      dropdownMenu.classList.remove("visible");
      console.log("not visible");
    });
  });

  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver(showNav, options);
  const heroSection = document.getElementById("about-content");
  navObserver.observe(heroSection);
  function showNav(entries, observer) {
    entries.forEach((entry) => {
      if (entry.target.id == "about-content" && !entry.isIntersecting) {
        const navHeight = nav.offsetHeight;
        nav.classList.add("navshow");
        body.style.paddingTop = navHeight + "px";
      } else {
        nav.classList.remove("navshow");
        nav.classList.add("navHide");
        body.style.paddingTop = "0";
      }
    });
  }
})();
