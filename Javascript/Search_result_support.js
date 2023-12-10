const addToCartButtons = document.querySelectorAll(
    ".product button.Homepage-add-to-cart"
);

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = "kosik.html";
    });
});

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