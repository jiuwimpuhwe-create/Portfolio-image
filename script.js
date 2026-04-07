// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');

        if (target !== "#") {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Hire Me button interaction
const hireBtn = document.querySelector('.hire-btn');

hireBtn.addEventListener('click', () => {
    alert("Thank you for your interest! You can contact me via email.");
});


// Download Resume button
const resumeBtn = document.querySelector('.resume-btn');

resumeBtn.addEventListener('click', () => {
    window.open("resume.pdf", "_blank");
});
/ Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
    } else {
        navbar.style.background = "linear-gradient(to right, #0b0f19, #1f7a8c)";
    }
});
// Simple animation when page loads

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";

        setTimeout(() => {
            box.style.transition = "all 0.5s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 200);
    });
});
