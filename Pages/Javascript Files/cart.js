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