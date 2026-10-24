import './style.css'
import javascriptLogo from './assets/javascript.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', () => {

    const savedItems = JSON.parse(localStorage.getItem('art_checkout')) || [];


    const nameDisplay = document.getElementById('display-name');
    const priceDisplay = document.getElementById('display-price');
    const totalDisplay = document.getElementById('display-total');
    const imageDisplay = document.getElementById('painting'); 

    let cartTotal = 0;

    if (savedItems.length > 0) {
        const latestItem = savedItems[savedItems.length - 1];

        if (nameDisplay) nameDisplay.innerText = latestItem.name;
        if (priceDisplay) priceDisplay.innerText = latestItem.price;


        if (imageDisplay) {
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

    if(cartTotal > 0 && document.getElementById("paypal-button-container")) {
        document.getElementById("paypal-button-container").innerHTML= ""

        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: finalAmount
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert("Success! Thank you " + details.payer.name.given_name);
                    localStorage.removeItem('art_checkout'); 
                    window.location.href = "index.html";
                })
            },
            onError: (err) => {
                console.error("PayPal Checkout Error:", err);
            }
        }).render("#paypal-button-container")
    }
}); 

