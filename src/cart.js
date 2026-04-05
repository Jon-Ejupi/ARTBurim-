import './style.css'
import javascriptLogo from './assets/javascript.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', () => {
    // 1. PULL DATA
    const savedItems = JSON.parse(localStorage.getItem('art_checkout')) || [];

    // 2. DOM ELEMENTS
    const nameDisplay = document.getElementById('display-name');
    const priceDisplay = document.getElementById('display-price');
    const totalDisplay = document.getElementById('display-total');
    const imageDisplay = document.getElementById('painting'); // FIXED: Added this line

    let cartTotal = 0;

    // 3. LOGIC
    if (savedItems.length > 0) {
        const latestItem = savedItems[savedItems.length - 1];

        if (nameDisplay) nameDisplay.innerText = latestItem.name;
        if (priceDisplay) priceDisplay.innerText = latestItem.price;

        // Dynamic Image Loader
        if (imageDisplay) {
            // This looks for "The Resting Skiff.jpg" etc.
            imageDisplay.src = `src/assets/paintings/${latestItem.name}.jpg`;
        }
        
       savedItems.forEach(item => {
            cartTotal += parseFloat(item.price);
       });
    } else {
        if (nameDisplay) nameDisplay.innerText = "No items selected";
    }

    const finalAmount = cartTotal.toFixed(2);
    if (totalDisplay) totalDisplay.innerText = finalAmount;

    // 4. PAYPAL
    if (cartTotal > 0) {
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: finalAmount }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Success! Thank you, ' + details.payer.name.given_name);
                    localStorage.removeItem('art_checkout'); 
                    window.location.href = "index.html";
                });
            }
        }).render("#paypal-button-container");
    }
});

