// productDetail.js
document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var itemId = urlParams.get('item');

    // Fetch and display product details
    var productDetails = getProductDetails(itemId);
    var imageUrl = "img/RI048b2.webp"
    var productName = getProductName(itemId);

    if (!itemId || !productDetails) {
        // If item ID is not found or details are empty, show 404 message
        document.getElementById('item-description').innerHTML = '<H1>error</H1>\n<p>Page Not Found</p>';
    } else {
        console.log("Product Name:", productName);
        console.log("Image URL:", imageUrl);
        console.log("Product Details:", productDetails);
        // Display the item ID and product details
        document.getElementById('item-name').innerHTML = '<h1>' + productName + '</h1>\n';
        document.getElementById('item-image').src = imageUrl;
        document.getElementById('item-description').innerHTML = '<p>' + productDetails + '</p>';
    }
});

// Mock function to fetch product details (replace this with actual data fetching logic)
function getProductDetails(itemId) {
    // Mock data, replace with actual data fetching logic
    var details = {
        'item1': 'Mobilní telefon - 6,1" Super Retina XDR OLED 2532 \× 1170, operační paměť 4 GB, vnitřní paměť 128 GB, single SIM + eSIM, procesor Apple A15 Bionic, fotoaparát: 12Mpx (f/1,6) hlavní + 12Mpx širokoúhlý, přední kamera 12Mpx, GPS, NFC, LTE, 5G, Lightning port, voděodolný dle IP68, rychlé nabíjení 20W, bezdrátové nabíjení 15W, baterie 3240 mAh, model 2021, iOS',
        'item2': 'Awesome details for Item 2.',
        // Add more details as needed
    };

    return details[itemId];
}

// Mock function to fetch product details (replace this with actual data fetching logic)
function getProductName(itemId) {
    // Mock data, replace with actual data fetching logic
    var details = {
        'item1': 'Ifon',
        'item2': 'Telefon',
        // Add more details as needed
    };

    return details[itemId];
}