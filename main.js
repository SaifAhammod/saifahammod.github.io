// main.js
//--------------------------------------------------------------------
// Define all your global texts here
const globalTexts = {
    role: "RA at NIRO Lab || AI & Robotics Researcher || Co-Founder of Codatron",
    footerNote: "© 2025 All rights reserved.",
};

// Function to apply text to all matching class elements
document.addEventListener("DOMContentLoaded", () => {
    for (const [key, value] of Object.entries(globalTexts)) {
        document.querySelectorAll(`.text-${key}`).forEach(el => {
            el.textContent = value;
        });
    }
});
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Define your color variables
const colorPalette = {
    textColor: "#EBFEF4",

    h1Color: "#00b3ff",

    boldColor: "#77ECF2",

    linkColor: "#ffe4c4",

    boderColor: "#ffffff",

    hoverbgColor: "#022c43",

    backgroundColor1: "#070F2B",

    highlightColor: "#00b3ff",

    accent: "#e74c3c"
};

// Apply them to :root as CSS variables
document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(colorPalette)) {
        root.style.setProperty(`--${key}`, value);
    }
});
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Nav Bar active or not
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname; // e.g., "/about.html"
  
  document.querySelectorAll(".w3-bar-item").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
//--------------------------------------------------------------------