# React Shopping Cart

A simple shopping experience built with React, featuring product fetching, cart management, quantity controls, and shared state across routes. This project demonstrates clean component structure, controlled state updates, and a modular approach to UI and logic.

---

## Overview

The application allows users to browse products, adjust quantities, and manage their cart. It uses React Router’s \`Outlet\` context to share global state between pages, and CSS Modules for scoped styling. Products are fetched from FakeStoreAPI and extended with cart‑related fields.

---

## Features

- Product fetching from FakeStoreAPI  
- Add to Cart and Update Cart functionality  
- Increment and decrement quantity controls  
- Global cart state shared across routes  
- Dynamic cart total displayed in the navigation bar  
- Remove from Cart support  
- Loading and error handling for API requests  
- Modular components with clear responsibilities  

---

## Tech Stack

- React  
- React Router  
- CSS Modules  
- FakeStoreAPI  

---

## Project Structure

\`\`\`txt
src/
│
├── App.jsx              \# Layout + shared state provider
├── routes.jsx           \# Route configuration
│
├── NavBar/
│   └── NavBar.jsx       \# Navigation + cart count
│
├── Home/
│   └── Home.jsx
│
├── Shop/
│   ├── ShopFetch.jsx    \# Fetch products + add to cart logic
│   ├── CardGrid.jsx
│   └── ItemCard.jsx     \# Product card + quantity selector
│
├── Cart/
│   ├── Cart.jsx         \# Cart page
│   └── CartItem.jsx     \# Quantity controls + remove item
│
└── ErrorPage.jsx
\`\`\`

---

## State Flow

### App.jsx

Holds global state for:

- \`products\`  
- \`totItems\`  

This state is passed to all pages through \`useOutletContext()\`.

### Shop Page

- Fetches products from the API  
- Adds \`inCart\` and \`quantity\` fields  
- Handles adding and updating items in the cart  

### Cart Page

- Filters products where \`inCart\` is true  
- Allows quantity adjustments  
- Updates global totals  
- Supports removing items entirely  

### NavBar

Displays the current total number of items in the cart.

---

## Key Concepts Demonstrated

- Global state sharing without external libraries  
- Controlled updates using pure functions (\`map\`, \`reduce\`)  
- Separation of local and global state  
- Component‑level responsibility and modular design  
- Error and loading handling for API requests  

---

## API

The project uses FakeStoreAPI:

\`\`\`txt
https://fakestoreapi.com/products
\`\`\`

Each product is extended with:

\`\`\`js
{
  inCart: false,
  quantity: 0
}
\`\`\`

---

## Running the Project

\`\`\`bash
npm install
npm run dev
\`\`\`

---

## Future Improvements

- Add product categories  
- Add a checkout page  
- Persist cart in localStorage  
- Add animations for cart updates
