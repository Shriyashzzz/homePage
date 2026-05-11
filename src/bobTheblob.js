(() => {
  let isHoverd = false;

  const cursorBall = document.getElementById("cursorFollow");
  window.addEventListener("mousemove", (event) => {
    cursorBall.style.transform = `translate(${event.clientX}px ,${event.clientY}px) scale(${isHoverd ? 1.2 : 1})`;
    cursorBall.style.backgroundColor = isHoverd
      ? "#92AA83"
      : `rgb(141, 255, 47)`;
  });

  const menuTitle = document.querySelector(".menu-title");
  menuTitle.addEventListener("mouseenter", () => {
    isHoverd = true;
  });

  menuTitle.addEventListener("mouseleave", () => {
    isHoverd = false;
  });

  const navLink = document.querySelectorAll(".navLink");
  navLink.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      isHoverd = true;
    });
    link.addEventListener("mouseleave", () => {
      isHoverd = false;
    });
  });

  const projects = document.querySelectorAll(".project");
  projects.forEach((proj) => {
    proj.addEventListener("mouseenter", () => {
      isHoverd = true;
    });
    proj.addEventListener("mouseleave", () => {
      isHoverd = false;
    });
  });

  const icons = document.querySelectorAll(".svgIcons");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      isHoverd = true;
    });
    icon.addEventListener("mouseleave", () => {
      isHoverd = false;
    });
  });
})();
