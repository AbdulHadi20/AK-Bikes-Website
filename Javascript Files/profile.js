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
        document.getElementById('profileBio').innerHTML = `<p>${newBio}</p>`;
    }

    document.getElementById('editProfileForm').style.display = 'none';
}
