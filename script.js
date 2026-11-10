const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(/\s+/);
      const visible = selected === "all" || categories.includes(selected);
      card.classList.toggle("hidden", !visible);
    });
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
