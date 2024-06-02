document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        mainImage.src = this.src.replace('-thumb', '');
      });
    });
  
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const quantityInput = document.getElementById('quantity');
  
    decrementButton.addEventListener('click', function() {
      if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    });
  
    incrementButton.addEventListener('click', function() {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.querySelector(".add-to-cart");
    const popupContainer = document.querySelector(".popup-container");
    const dimBackground = document.querySelector(".dim-background");
  
    addToCartBtn.addEventListener("click", function() {
      popupContainer.style.display = "block"; // Display the popup container
      dimBackground.style.display = "block"; // Display the dimmed background
    });
  
    const proceedToCheckoutBtn = document.querySelector(".proceed-to-checkout");
    const continueShoppingBtn = document.querySelector(".continue-shopping");
  
    proceedToCheckoutBtn.addEventListener("click", function() {
      window.location.href = "cart.html";
    });
  
    continueShoppingBtn.addEventListener("click", function() {
      window.location.href = "shop.html";
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