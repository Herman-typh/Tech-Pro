// =========================
// TECH-PRO JAVASCRIPT
// =========================

console.log("Tech-Pro est prêt 🚀");


// Animation simple au chargement
document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {

        hero.style.transition = "all 0.8s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 200);

});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// Animation des sections au défilement

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});
// Gestion du formulaire de contact

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("✅ Merci ! Votre message a bien été envoyé.");

    contactForm.reset();

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});