const toggles = document.querySelectorAll(".accordion-toggle");

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
