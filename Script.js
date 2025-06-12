// script.js

// Show a welcome message when the page loads
window.onload = function () {
    alert("Welcome to Alpha Institute for Research and Innovation!");
};

// Confirm before contacting
function confirmContact(method) {
    return confirm("Do you want to contact us via " + method + "?");
}
