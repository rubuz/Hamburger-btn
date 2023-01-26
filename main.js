const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerBtn.getAttribute("aria-expanded");
  if (isOpen === "false") {
    hamburgerBtn.setAttribute("aria-expanded", "true");
  } else {
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
});
