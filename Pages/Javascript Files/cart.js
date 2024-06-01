document.addEventListener('DOMContentLoaded', function () {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const inputField = document.getElementById('quantity');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (!isNaN(currentValue) && currentValue > 0) {
            inputField.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (!isNaN(currentValue)) {
            inputField.value = currentValue + 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-product');
  
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productContainer = this.closest('.product-container');
        if (productContainer) {
          productContainer.remove();
        }
      });
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