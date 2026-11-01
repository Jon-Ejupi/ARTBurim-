import './style.css'
import { setupCounter } from './counter.js'

// Inside main.js
function updateCartUI() {
    const navBadge = document.getElementById('nav-cart-count');
    // We use the 'art_checkout' label to find our data in the browser
    const cart = JSON.parse(localStorage.getItem('art_checkout')) || [];
    
    if (navBadge) {
        navBadge.textContent = cart.length;
        if (cart.length > 0) {
            navBadge.classList.remove('hidden');
        } else {
            navBadge.classList.add('hidden');
        }
    }
}

document.addEventListener('click', (e) => {
    // This checks if what you clicked is actually the "Acquire Original" button
    if (e.target.classList.contains('add-to-cart')) {
        
        // This pulls the info directly from the HTML data-attributes
        const name = e.target.getAttribute('data-name');
        const price = e.target.getAttribute('data-price');

        const cart = JSON.parse(localStorage.getItem('art_checkout')) || [];
        
        // We add the painting to our list
        cart.push({ name, price });
        
        // We tell the browser: "Store this list under the label 'art_checkout'"
        localStorage.setItem('art_checkout', JSON.stringify(cart));

        updateCartUI();
        
        // Visual feedback so you know it worked!
        console.log("Saved to art_checkout:", name);
        alert(`${name} added to cart!`);
    }
});

// Run this once when the page loads so the cart count is correct
updateCartUI();

document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Open Menu
                mobileMenu.classList.remove('hidden');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                // Prevent background scrolling when menu is open
                document.body.style.overflow = 'hidden';
            } else {
                // Close Menu
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu if a link is clicked
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });
    });