function increaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity${id}`);
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateCart();
}

function decreaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity${id}`);
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateCart();
    }
}

function updateCart() {
    
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');

    const items = document.querySelectorAll('.quantity-input');
    let totalQuantity = 0;
    let totalCost = 0;

    items.forEach(item => {
        const quantity = parseInt(item.value);
        totalQuantity += quantity;
        totalCost += quantity * 25; 
    });

    totalItems.textContent = totalQuantity;
    totalPrice.textContent = `$RS{totalCost.toFixed(2)}`;
}
function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');

    successMessage.textContent = "Success! Your checkout is complete.";
    successMessage.style.display = "block";

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}
