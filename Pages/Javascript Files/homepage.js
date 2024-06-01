/* scripts.js */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.getElementById('search-icon').addEventListener('click', function() {
    const searchInput = document.querySelector('.input-search');
    if (searchInput.classList.contains('hidden')) {
      searchInput.classList.remove('hidden');
      setTimeout(() => {
        searchInput.classList.add('expanded');
      }, 10); // Short delay to trigger the transition
    } else {
      searchInput.classList.remove('expanded');
      setTimeout(() => {
        searchInput.classList.add('hidden');
      }, 500); // Wait for the transition to complete before hiding
    }
  });

  document.getElementById('hamburger-menu').addEventListener('click', function() {
const navBar = document.getElementById('nav-bar');
navBar.classList.toggle('active');
});