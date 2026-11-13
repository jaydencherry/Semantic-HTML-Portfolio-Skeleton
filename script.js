// Find the dark and light mode button.
const themeToggle = document.getElementById("theme-toggle");

// Switch themes and update the button's label.
function toggleTheme() {
    const lightModeEnabled = document.body.classList.toggle("light-mode");

    if (lightModeEnabled) {
        themeToggle.textContent = "Switch to dark mode";
    } else {
        themeToggle.textContent = "Switch to light mode";
    }
}

// Run the function whenever the button is clicked.
if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}

// Check whether the visitor prefers reduced motion.
const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// ScrollReveal animations
if (typeof ScrollReveal === "function") {
    ScrollReveal().reveal("#about", {
        distance: "40px",
        origin: "bottom",
        duration: 800
    });

    ScrollReveal().reveal("#projects h2", {
        distance: "40px",
        origin: "left",
        duration: 800
    });

    ScrollReveal().reveal("#projects article", {
        distance: "50px",
        origin: "bottom",
        duration: 900,
        interval: 250
    });

    ScrollReveal().reveal("#contact", {
        distance: "40px",
        origin: "bottom",
        duration: 800
    });
}