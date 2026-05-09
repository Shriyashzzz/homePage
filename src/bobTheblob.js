(() => {
  let isHoverd = false;

  const cursorBall = document.getElementById("cursorFollow");
  window.addEventListener("mousemove", (event) => {
    cursorBall.style.transform = `translate(${event.clientX}px ,${event.clientY}px) scale(${isHoverd ? 1.5 : 1})`;
    cursorBall.style.backgroundColor = isHoverd ? "red" : `rgb(141, 255, 47)`;
  });
})();
