const colors = ['#DA7A04'];
let colorIndex = 0;

function editProfile() {
    document.getElementById('editProfileForm').style.display = 'block';
}

function saveProfile() {
    const newName = document.getElementById('newName').value;
    const newBio = document.getElementById('newBio').value;

    if (newName) {
        document.getElementById('profileName').textContent = newName;
    }
    if (newBio) {
        const bioElement = document.getElementById('profileBio');
        bioElement.innerHTML = `<p>${newBio}</p>`;
        bioElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    }

    document.getElementById('editProfileForm').style.display = 'none';
}

function previewProfilePic(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profilePic');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function logout() {
    alert('You have logged out.');
    // Add any additional logout functionality here
    window.location.reload(); // This will reload the page, simulating a logout
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
