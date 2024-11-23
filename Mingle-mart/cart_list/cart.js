window.onload = function() {
    updateCart();
};

function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartContainer = document.getElementById('cart-items');
    let cartCount = 0;
    let cartTotal = 0;

    cartContainer.innerHTML = ''; // Clear cart items before adding them

    for (let productId in cart) {
        let quantity = cart[productId];

        // Fetch product details from an API or hardcoded data
        let product = getProductById(productId); // Assume this function fetches product details by ID

        // Calculate total price for this product
        let totalPrice = product.price * quantity;
        cartTotal += totalPrice;
        cartCount += quantity;

        // Create cart item HTML
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${product.name}</h3>
                <p class="cart-item-price">$${product.price}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${productId}', -1)">-</button>
                    <input type="number" class="quantity-input" value="${quantity}" disabled>
                    <button class="quantity-btn" onclick="updateQuantity('${productId}', 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${productId}')">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    }

    // Update total and cart count
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    document.getElementById('cart-count').textContent = cartCount;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        cart[productId] += change;
        if (cart[productId] <= 0) {
            delete cart[productId];
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    delete cart[productId];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Sample function to get product details (replace with actual API/database fetching)
function getProductById(productId) {
    const products = {
        "1": { name: "Product 1", price: 19.99, image: "product1.jpg" },
        "2": { name: "Product 2", price: 29.99, image: "product2.jpg" },
        "3": { name: "Product 3", price: 39.99, image: "product3.jpg" }
    };

    return products[productId] || { name: "Unknown Product", price: 0, image: "default.jpg" };
}
function proceedToCheckout() {
    // Clear the cart (optional)
    localStorage.removeItem('cart');

    // Change the body content to show a success message
    document.body.innerHTML = `
        <div class="success-container">
            <h1>🎉 Thank You for Your Purchase! 🎉</h1>
            <p>Your order has been successfully placed. We’ll notify you with updates!</p>
            <a href="../home.html" class="go-back-btn">Go Back to Home</a>
        </div>
    `;

    // Apply styles for the success message
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('../pics/checkout.jpg') no-repeat center center/cover;
            color: #fff;
            font-family: Arial, sans-serif;
        }

        .success-container {
            text-align: center;
            padding: 40px;
            background: #032B43;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            animation: fadeIn 1.5s;
        }

        .success-container h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .success-container p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }

        .go-back-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #fff;
            color: #4caf50;
            font-size: 1rem;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }

        .go-back-btn:hover {
            background-color: #4caf50;
            color: #fff;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}
