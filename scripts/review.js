document.addEventListener("DOMContentLoaded", function () {
    // Get the current review count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // If no count exists, initialize to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount); // Convert string to number
    }

    // Increment the review count
    reviewCount++;

    // Store the updated review count
    localStorage.setItem("reviewCount", reviewCount);

    // Display the review count on the page
    let counterElement = document.getElementById("reviewCounter");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
});