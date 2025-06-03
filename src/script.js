const toggles = document.querySelectorAll(".accordion-toggle");
const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

// Accordian
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;

    // Close other open accordions (optional)
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.classList.add("hidden");
      }
    });

    // Toggle current
    content.classList.toggle("hidden");
  });
});

// show mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-60");
});

// hide mobile menu
menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-60");
});
