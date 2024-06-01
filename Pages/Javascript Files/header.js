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