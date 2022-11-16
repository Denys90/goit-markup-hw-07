(() => {
  const mobileMenu = document.querySelector("[data-menu-container]");
  const openMenuBtn = document.querySelector("[data-open-menu]");
  const closeMenuBtn = document.querySelector("[data-close-menu]");
  const wrapper = document.querySelector("body");

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    wrapper.classList.toggle("lock");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    wrapper.classList.remove("lock");
  });
})();
