function openChatbot() {
  // Replace with the actual link or function to open your chatbot
  window.location.href = 'chatbot.html'; // Example link to the chatbot page
}

function toggleSearchBar() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.getElementById('searchIcon');
  searchBar.classList.add('expanded');
  searchIcon.style.display = 'none';
  searchBar.focus();
}

function hideSearchBar() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.getElementById('searchIcon');
  searchBar.classList.remove('expanded');
  searchIcon.style.display = 'block';
}
