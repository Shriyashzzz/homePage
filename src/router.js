import resumePdf from "./assets/Shriyash_Ghimire_Resume.pdf";

(() => {
  // hash based routing, each view is an element with data-view="<route>"
  const titles = {
    about: "About",
    projects: "Projects",
    resume: "Resume",
  };
  const defaultRoute = "about";

  // old section anchors still land on the right view
  const legacyHashes = {
    "#about-content": "about",
    "#project-content": "projects",
  };

  const views = document.querySelectorAll(".view");
  const routeLinks = document.querySelectorAll("[data-route]");

  document.getElementById("resumeDownload").href = resumePdf;

  function getRoute() {
    const hash = window.location.hash;
    if (legacyHashes[hash]) return legacyHashes[hash];
    const route = hash.replace(/^#\/?/, "");
    return titles[route] ? route : defaultRoute;
  }

  function render() {
    const route = getRoute();
    const expectedHash = `#/${route}`;
    if (window.location.hash !== expectedHash) {
      history.replaceState(null, "", expectedHash);
    }

    views.forEach((view) => {
      view.hidden = view.dataset.view !== route;
    });

    routeLinks.forEach((link) => {
      if (link.dataset.route === route) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.title = `Shriyash Ghimire | ${titles[route]}`;
    // body is the scroll container (html has overflow hidden)
    document.body.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }

  window.addEventListener("hashchange", () => {
    render();
    const active = document.querySelector(".view:not([hidden])");
    active?.focus({ preventScroll: true });
  });
  render();
})();
