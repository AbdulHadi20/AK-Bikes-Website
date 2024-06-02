document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            var answer = this.nextElementSibling;
            if (answer.classList.contains("open")) {
                answer.classList.remove("open");
            } else {
                answer.classList.add("open");
            }
        });
    });
});


// faqs.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navBar = document.getElementById("nav-bar");

    hamburgerMenu.addEventListener("click", function() {
        navBar.classList.toggle("active");
    });

    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.querySelector(".input-search");

    searchIcon.addEventListener("click", function() {
        searchInput.classList.toggle("expanded");
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY> 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    // Toggle search bar visibility on search button click
    searchToggle.addEventListener('click', function () {
        searchContainer.style.display = (searchContainer.style.display === 'block') ? 'none' : 'block';
    });
});
