// Welcome Message
console.log("Portfolio Website Loaded Successfully!");
 
// Button Click Function
function showMessage() {
    alert("Welcome to My Portflio Website!");
}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

const text = [
    "Python Developer 💻",
    "AI/ML Enthusiast 🤖",
    "Web Developer 🌐",
    "Tech Learner 🚀"
];

let count = 0;

setInterval(() => {
    document.getElementById("typing").textContent = text[count];
    count = (count + 1) % text.length;
}, 2000);

const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

AOS.init({
    duration: 1500,
    offset: 150,
    once:true
});

// Scroll Progress Bar

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
        const increment = Math.ceil(target / 50);

        if (count < target) {
            count += increment;
            if (count > target) count = target;

            if (target === 100) {
                counter.innerText = count + "%";
            } else {
                counter.innerText = count + "+";
            }

            setTimeout(updateCounter, 30);
        }
    };

    updateCounter();
});

// ===== Loading Screen =====

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1200);
});

// =========================
// R + S Secret Easter Egg
// =========================

const heroName = document.getElementById("secret-trigger");
const navName = document.getElementById("secret-trigger-nav");
const popup = document.getElementById("secret-popup");

function openSecret() {
    alert("R + S Secret Activated! 🎉");
    const popup = document. getElementById("secret-popup");
    console.log(popup);         
    popup.style.display = "flex";
    popup.style.zIndex  = "99999";
}


window.closeSecret = function () {
    document. getElementById("secret-popup").style.display = "none";
}
    
if (heroName) {
    heroName.addEventListener("click", openSecret);
}

if (navName) {
    navName.addEventListener("click", openSecret);
}