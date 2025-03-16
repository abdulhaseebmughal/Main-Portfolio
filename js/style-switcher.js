/* ========================= Toggle Style Switcher ========================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ========================= Theme Colors ========================= */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  // Apply color to cursor
  applyCursorColor(color);
}

/* ========================= Function to Change Cursor Color ========================= */
function applyCursorColor(color) {
  const cursorOuter = document.querySelector(".custom-cursor-outer");
  const cursorInner = document.querySelector(".custom-cursor-inner");

  if (cursorOuter && cursorInner) {
    cursorOuter.style.borderColor = color; // Change outer cursor border
    cursorInner.style.backgroundColor = color; // Change inner cursor color
  }
}

/* ========================= Theme Light and Dark Mode ========================= */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("em").classList.toggle("fa-sun");
  dayNight.querySelector("em").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Apply cursor color change based on theme mode
  applyCursorForTheme();
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("em").classList.add("fa-sun");
  } else {
    dayNight.querySelector("em").classList.add("fa-moon");
  }

  // Apply cursor color based on the current theme
  applyCursorForTheme();
});

/* ========================= Change Cursor for Light/Dark Mode ========================= */
function applyCursorForTheme() {
  const cursorOuter = document.querySelector(".custom-cursor-outer");
  const cursorInner = document.querySelector(".custom-cursor-inner");

  if (document.body.classList.contains("dark")) {
    cursorOuter.style.borderColor = "#ffffff"; // White border for dark mode
    cursorInner.style.backgroundColor = "#ffffff"; // White inner cursor
  } else {
    cursorOuter.style.borderColor = "#000000"; // Black border for light mode
    cursorInner.style.backgroundColor = "#000000"; // Black inner cursor
  }
}

/* ========================= Custom Cursor Movement ========================= */
document.addEventListener("mousemove", function (e) {
  const cursorOuter = document.querySelector(".custom-cursor-outer");
  const cursorInner = document.querySelector(".custom-cursor-inner");

  if (cursorOuter && cursorInner) {
    cursorInner.style.left = e.clientX + "px";
    cursorInner.style.top = e.clientY + "px";

    setTimeout(() => {
      cursorOuter.style.left = e.clientX + "px";
      cursorOuter.style.top = e.clientY + "px";
    }, 50);
  }
});

