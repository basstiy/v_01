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

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'kosik.html';
  });
});

// Retrieve the search query parameter from the URL
var searchQuery = getParameterByName('query');

// Update the content of the <h2> tag with the search query
document.getElementById('searchQueryHeading').textContent = "Vyhledáno: " + searchQuery;
document.getElementById('search-title').textContent = "Vyhledáno: " + searchQuery

// Function to retrieve query parameters from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function redirectToSearchResults() {
  var inputValue = document.getElementById('searchInput').value;
  // Get the value of the input field with the specified ID

  // Construct the URL with the search query parameter
  var redirectUrl = "search_result_positive.html?query=" + encodeURIComponent(inputValue);

  // Redirect to the constructed URL
  window.location.href = redirectUrl;
}

// Retrieve the search query parameter from the URL
var searchQuery = getParameterByName('query');

// Update the content of the <h2> tag with the search query
document.getElementById('searchQueryHeading').textContent = "Vyhledáno: " + searchQuery;
document.getElementById('search-title').textContent = "Vyhledáno: " + searchQuery

// Function to retrieve query parameters from the URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}