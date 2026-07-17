// main.js
//--------------------------------------------------------------------
// Define all your global texts here
const globalTexts = {
    role: "Engineer | Roboticist | Businessman",
    //Footer
    footerRightsNote: "© 2026 Saif. All rights reserved.",
    //Column 1
    footerCol1Title: "What is Codatron?",
    footerCol1Desc: "Codatron is a research-driven tech initiative dedicated to solving real-world problems through Artificial Intelligence, Robotics and Automation. We support project and product development, deliver hands-on training for students and professionals, and share knowledge through blogs, vlogs, and communities. Whether you're looking to learn, build, or innovate, Codatron offers the research, mentorship, and technology to help you get there.",
    footerCol1Hightext1: "Mail: codatron.bd@gmail.com",
    footerCol1Hightext2: "Call:+8801705225969 ",
    footerCol1Hightext3: "Text:+8801521419974 (Whatsapp)",
    footerCol1Link: "Visit: codatron.com",
    //Column 2
    footerCol2Title: "Important Link",
    //Column 3
    footerCol3Title: "MY PLATFORMS",
    footerTag1: "CODATRON.COM",
    footerTag2: "CREATOR Lab",
    footerTag3: "AI & ROBOTICS COMMUNITY BANGLADESH",
    footerTag4: "GREEN HARDWARE & MACHINERIES RAJSHAHI",
    footerTag5: "GREEN ENTERPRISE RAJSHAHI",
    footerTag6: "NSU IGNITE",
    footerTag7: "",
    footerTag8: "",
    footerTag9: "",
    footerTag10: "",
    footerTag11: "",
    footerTag12: "",
    footerTag13: "",
    footerTag14: "",
    footerTag15: "",
    footerTag16: "",
    footerTag17: "",
    footerTag18: "",
    footerTag19: "",
    footerTag20: "",
    footerQuoteTitle:"REMEMBER ONE THING",
    footerQuote: "The best way to create value in the 21st century is to connect Creativity with Technology.",
    footerQuoteCredit:"- Steve Jobs",
    

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
    lightColor: "#fff7c5",
    darkColor: "#202940",

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
//--------------------------------------------------------------------
//Main page Snow effect
var particles = document.getElementById("particles");

    function main() {
      var np = document.documentElement.clientWidth / 29;
      particles.innerHTML = "";
      for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w) + 1;
        var rndh = Math.floor(Math.random() * h) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 3;
        var opty = Math.floor(Math.random() * 5) + 2;
        var anima = Math.floor(Math.random() * 12) + 8;

        var div = document.createElement("div");
        div.classList.add("particle");
        div.style.marginLeft = rndw + "px";
        div.style.marginTop = rndh + "px";
        div.style.width = widthpt + "px";
        div.style.height = widthpt + "px";
        div.style.background = "white";
        div.style.opacity = opty;
        div.style.animation = "move " + anima + "s ease-in infinite ";
        particles.appendChild(div);
      }
    }

    window.addEventListener("resize", main);
    window.addEventListener("load", main);
    //--------------------------------------------------------------------