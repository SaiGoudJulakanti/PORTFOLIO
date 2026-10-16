
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
