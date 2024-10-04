// Smooth scroll to categories
function scrollToCategory() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Placeholder functionality for icons
document.getElementById('search-icon').addEventListener('click', () => {
    alert("Search feature coming soon!");
});

document.getElementById('cart-icon').addEventListener('click', () => {
    alert("Your cart is empty.");
});

document.getElementById('wishlist-icon').addEventListener('click', () => {
    alert("Wishlist feature coming soon!");
});

document.getElementById('login-icon').addEventListener('click', () => {
    alert("Login/Signup coming soon.");
});

document.getElementById('notifications-icon').addEventListener('click', () => {
    alert("No new notifications.");
});

document.getElementById('chatbot-icon').addEventListener('click', () => {
    alert("Chatbot is ready to assist you!");
});
