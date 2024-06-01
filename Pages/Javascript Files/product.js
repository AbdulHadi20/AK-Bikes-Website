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