// Product List
const products = [
    { id: 1, name: "Cardamom", price: 250.00, image: "cardamom.jpg" },
    { id: 2, name: "Chili Powder", price: 180.00, image: "chili_powder.jpg" },
    { id: 3, name: "Cumin", price: 130.00, image: "cumin.jpg" },
    { id: 4, name: "Turmeric", price: 150.00, image: "turmeric.jpg" },
    { id: 5, name: "Garam Masala", price: 200.00, image: "garam_masala.jpg" }
];

// Dynamically Display Products
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    if (!productContainer) {
        console.error("Product container not found.");
        return;
    }

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="../pics/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>RS${product.price.toFixed(2)}</p>
                <button class="btn-primary" onclick="addToCart(${product.id}, 1)">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Add Products to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Product not found.");
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} x ${product.name} added to your cart!`);
    console.log("Cart:", cart); // Debugging Cart Content
}

// Add Products to Cart and Navigate
function addToCartAndNavigate(productId, productPage) {
    addToCart(productId, 1);
    window.location.href = productPage;
}

// Call displayProducts to Render Products on Page Load
document.addEventListener("DOMContentLoaded", displayProducts);
// Function to Add Items to Cart
function addToCart(productName, price) {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value, 10);
    
    if (quantity < 1) {
        alert("Please enter a valid quantity!");
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productName === productName);

    if (existingProduct) {
        existingProduct.quantity += quantity; // Update existing product's quantity
    } else {
        cart.push({ productName, price, quantity }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Refresh the cart count
    alert(`${quantity} x ${productName} added to your cart!`);
}

// Function to Navigate and Add to Cart (For Related Products)
function addToCartAndNavigate(productName, price, productPage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productName === productName);

    if (existingProduct) {
        existingProduct.quantity += 1; // Default to 1 for related products
    } else {
        cart.push({ productName, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    window.location.href = productPage;
}

// Function to Update Cart Count in the Header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems; // Update cart count dynamically
    }
}
