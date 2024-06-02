function openChatbot() {
  // Replace with the actual link or function to open your chatbot
  window.location.href = 'chatbot.html'; // Example link to the chatbot page
}

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


