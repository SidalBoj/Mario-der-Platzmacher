// Mobiles Menü

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("open");

    if (mainNav.classList.contains("open")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// Menü nach Klick schließen

const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        mainNav.classList.remove("open");

        menuToggle.innerHTML = "☰";

    });

});


// Automatisches Jahr im Footer

document.getElementById("year").textContent =
    new Date().getFullYear();