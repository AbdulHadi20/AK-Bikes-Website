document.addEventListener('DOMContentLoaded', () => {
  const filterGroups = document.querySelectorAll('.filter-group input');
  const galleryViewButton = document.getElementById('gallery-view');
  const listViewButton = document.getElementById('list-view');
  const productView = document.querySelector('.product-view');
  let currentView = 'gallery'; // default view

  filterGroups.forEach(group => {
    group.addEventListener('change', applyFilters);
  });

  galleryViewButton.addEventListener('click', () => {
    switchView('gallery');
  });

  listViewButton.addEventListener('click', () => {
    switchView('list');
  });

  function applyFilters() {
    const filters = {
      type: Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value),
      size: Array.from(document.querySelectorAll('input[name="size"]:checked')).map(input => input.value),
      color: Array.from(document.querySelectorAll('input[name="color"]:checked')).map(input => input.value),
      price: Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value)
    };

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const productType = product.getAttribute('data-type');
      const productSize = product.getAttribute('data-size');
      const productColor = product.getAttribute('data-color');
      const productPrice = parseInt(product.getAttribute('data-price'));

      const isTypeVisible = filters.type.length === 0 || filters.type.includes(productType);
      const isSizeVisible = filters.size.length === 0 || filters.size.includes(productSize);
      const isColorVisible = filters.color.length === 0 || filters.color.includes(productColor);

      let isPriceVisible = true;
      if (filters.price.length > 0) {
        isPriceVisible = filters.price.some(priceRange => {
          switch (priceRange) {
            case 'under-1000':
              return productPrice < 1000;
            case '1000-2000':
              return productPrice >= 1000 && productPrice <= 4999;
            case 'above-2000':
              return productPrice > 5000;
            default:
              return true;
          }
        });
      }

      if (isTypeVisible && isSizeVisible && isColorVisible && isPriceVisible) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });

    // Reapply the current view
    switchView(currentView);
  }

  function switchView(view) {
    currentView = view;
    if (view === 'list') {
      productView.classList.add('list-view');
      productView.classList.remove('gallery-view');
      listViewButton.classList.add('active');
      galleryViewButton.classList.remove('active');
    } else {
      productView.classList.add('gallery-view');
      productView.classList.remove('list-view');
      galleryViewButton.classList.add('active');
      listViewButton.classList.remove('active');
    }

    // Ensure display:block for all filtered products in list-view mode
    if (currentView === 'list') {
      const visibleProducts = productView.querySelectorAll('.product');
      visibleProducts.forEach(product => {
        if (product.style.display !== 'none') {
          product.style.display = 'grid';
        }
      });
    }
  }

  // Initialize default view
  switchView(currentView);
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