
// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccess");

    // CONTACT FORM HANDLER
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMsg.textContent = "Message sent successfully!";
                successMsg.style.display = "block";
                successMsg.style.color = "#00ff00";
                form.reset();
                setTimeout(() => { successMsg.style.display = "none"; }, 5000);
            } else {
                const data = await response.json();
                if (data.errors) {
                    successMsg.textContent = data.errors.map(error => error.message).join(", ");
                } else {
                    successMsg.textContent = "Oops! There was a problem submitting your form.";
                }
                successMsg.style.display = "block";
                successMsg.style.color = "#ff4d4d";
                setTimeout(() => { successMsg.style.display = "none"; }, 5000);
            }
        } catch (error) {
            successMsg.textContent = "Network error. Please try again later.";
            successMsg.style.display = "block";
            successMsg.style.color = "#ff4d4d";
            setTimeout(() => { successMsg.style.display = "none"; }, 5000);
        }
    });

    // NAVBAR ACTIVE LINK ON SCROLL
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // SMOOTH SCROLLING
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // MOBILE MENU TOGGLE
    const header = document.querySelector(".site-header");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    header.appendChild(menuToggle);

    const nav = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Close menu when clicking a link (mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("open")) {
                nav.classList.remove("open");
            }
        });
    });
});




// MOBILE MENU TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open");
        }
    });
});

