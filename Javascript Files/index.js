function toggleSearchBar() {
    const searchBar = document.getElementsByClassName('searchbar');
    const searchIcon = document.getElementById('search');

    searchBar.classList.add('expanded');
    searchIcon.style.display = 'none';
    searchBar.focus();
}

function hideSearchBar() {
    const searchBar = document.getElementsByClassName('searchbar');
    const searchIcon = document.getElementById('search');
    searchBar.classList.remove('expanded');
    searchIcon.style.display = 'block';
}