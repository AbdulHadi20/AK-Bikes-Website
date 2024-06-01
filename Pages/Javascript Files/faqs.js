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
