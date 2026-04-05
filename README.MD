ARTBurim Gallery 🎨

A High-Performance Digital Art Space for the Modern Collector.

Built with a focus on manual architecture and technical mastery, ARTBurim is a bespoke e-commerce platform designed to showcase and sell original oil paintings. This project serves as a production-ready gallery for a professional artist, integrating secure payments and a minimalist, "Berlin-style" aesthetic.
🚀 The Tech Stack (Atom Core)

    Vanilla JavaScript (ES6+): No heavy frameworks. Pure logic for speed and full control over the DOM.

    Vite: For an ultra-fast development environment and optimized production builds.

    Tailwind CSS: For a utility-first, responsive design that stays "fixed" and elegant on all devices.

    LocalStorage API: Custom state management to persist user carts without needing a database.

    PayPal SDK Integration: Secure, international payment processing.

✨ Key Features

    Dynamic Cart Logic: A custom-built system using localStorage keys (art_checkout) to bridge data between the gallery and checkout pages.

    Sticky Visuals: Responsive "fixed-in-place" image containers for a museum-like browsing experience.

    Legal Compliance: Integrated Impressum and Datenschutz (GDPR) frameworks for the German market.

    Mobile-First Design: Optimized for high-end mobile workstations and tablets.

🛠️ Installation & Setup

To run this project locally on your Fedora/Linux environment:

    Clone the repository:
    Bash

    git clone https://github.com/your-username/artburim.git
    cd artburim

    Install dependencies:
    Bash

    npm install

    Launch the development server:
    Bash

    npm run dev

    Build for production:
    Bash

    npm run build

📂 Project Structure
Plaintext

├── src/
│   ├── assets/          # High-resolution painting exports
│   ├── style.css        # Tailwind directives and custom typography
│   ├── main.js          # Cart logic & DOM event listeners
│   └── cart.js          # PayPal integration & storage retrieval
├── index.html           # Main Gallery
├── Exhibitions.html     # Historical Archive
├── cart.html            # Checkout Interface
└── package.json         # Build scripts & dependencies

⚖️ Legal & Compliance

This project is built to comply with § 5 TMG and DSGVO (GDPR) regulations, featuring a structured Impressum and Privacy Policy required for operating business in Germany.
👨‍💻 About the Developer

Developed by Jon Ejupi under the Atom initiative.
Focus: Web Performance, 3D Rendering, and Systems Architecture.