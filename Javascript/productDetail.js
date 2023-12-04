const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const firstSlide = slides[0]; // Get the first slide

// Show only the first slide initially
firstSlide.style.display = 'block';

// Hide all other slides
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

let currentSlide = 0; // Track the current slide index

const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Update the current slide index
    currentSlide--;

    // Show the previous slide
    slides[currentSlide].style.display = 'block';
  }
});

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Update the current slide index
    currentSlide++;

    // Show the next slide
    slides[currentSlide].style.display = 'block';
  }
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const links = document.querySelectorAll('a[href="#reviews-content"]');

for (const tab of tabs) {
  tab.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default click behavior

    const target = event.target.getAttribute('data-target');

    // Remove the active class from the previously active tab
    const previouslyActiveTab = document.querySelector('.tab.active');
    if (previouslyActiveTab) {
      previouslyActiveTab.classList.remove('active');
    }

    // Hide all tab contents
    for (const tabContent of tabContents) {
      tabContent.classList.remove('active');
      tabContent.style.display = 'none';
    }

    // Show the selected tab content
    const selectedTabContent = document.querySelector(`#${target}`);
    selectedTabContent.classList.add('active');
    selectedTabContent.style.display = 'block';

    // Add the active class to the newly selected tab
    tab.classList.add('active');
  });
}

for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const target = link.getAttribute('href');
    const correspondingTab = document.querySelector(`[data-target="${target}"]`);

    correspondingTab.click(); // Trigger click event on the corresponding tab
  });
}
const reviewsLink = document.getElementById('reviewsLink');

reviewsLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const reviewsTab = document.querySelector('[data-target="reviews-content"]');
  reviewsTab.click(); // Trigger click event on the Reviews tab
});

const addToCartButtonProduct = document.querySelector('.add-to-cart-btn');

addToCartButtonProduct.addEventListener('click', () => {
  window.location.href = '/kosik 2.html';
});

const addToCartButtons = document.querySelectorAll('.Homepage-product button.Homepage-add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = '//kosik 2.html';
  });
});