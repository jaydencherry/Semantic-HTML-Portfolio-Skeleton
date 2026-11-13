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

// Animate content when ScrollReveal is available
// and the visitor has not requested reduced motion.
if (typeof ScrollReveal === "function" && !reduceMotion) {
    ScrollReveal().reveal(
        "#about, #projects h2, #projects article, #contact",
        {
            distance: "20px",
            origin: "bottom",
            duration: 650,
            interval: 100,
            reset: false,
            cleanup: true
        }
    );
}