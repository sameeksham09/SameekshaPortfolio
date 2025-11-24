// Toggle Hamburger Menu
const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Typed.js for roles
var typed = new Typed(".typed-roles", {
  strings: ["Backend Developer", "MERN Stack Developer", "AI / ML Enthusiast", "Tech Explorer"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});

// Section Navigation
function hideAllSections() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("experience-section").style.display = "none";
}

function showHome() {
    hideAllSections();
    document.getElementById("home-section").style.display = "block";
    window.scrollTo(0,0);
}

function showAbout() {
    hideAllSections();
    document.getElementById("about-section").style.display = "block";
    window.scrollTo(0,0);
}

function showProjects() {
    hideAllSections();
    document.getElementById("projects-section").style.display = "block";
    window.scrollTo(0,0);
}

function showContact() {
    hideAllSections();
    document.getElementById("contact-section").style.display = "block";
    window.scrollTo(0,0);
}

function showExperience() {
    hideAllSections();
    document.getElementById("experience-section").style.display = "block";
    window.scrollTo(0,0);
}

function showResearch() {
    hideAllSections();
    document.getElementById("research-section").style.display = "block";
    window.scrollTo(0,0);
}

function hideAllSections() {
    const sections = ["home-section","projects-section","about-section","contact-section","experience-section","research-section"];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = "none";
    });
}
