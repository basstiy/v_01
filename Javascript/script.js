// script.js
function showItem(itemId) {
    // Assuming productDetail.html exists for each item
    var productDetailUrl = '../detail_product.html?item=' + itemId;
    window.location.href = productDetailUrl;
}