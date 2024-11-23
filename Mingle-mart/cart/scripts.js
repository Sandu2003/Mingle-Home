// function increaseQuantity(id) {
//     const quantityInput = document.getElementById(`quantity${id}`);
//     quantityInput.value = parseInt(quantityInput.value) + 1;
//     updateCart();
// }

// function decreaseQuantity(id) {
//     const quantityInput = document.getElementById(`quantity${id}`);
//     if (parseInt(quantityInput.value) > 1) {
//         quantityInput.value = parseInt(quantityInput.value) - 1;
//         updateCart();
//     }
// }

// function updateCart() {
    
//     const totalItems = document.getElementById('total-items');
//     const totalPrice = document.getElementById('total-price');

//     const items = document.querySelectorAll('.quantity-input');
//     let totalQuantity = 0;
//     let totalCost = 0;

//     items.forEach(item => {
//         const quantity = parseInt(item.value);
//         totalQuantity += quantity;
//         totalCost += quantity * 25; 
//     });

//     totalItems.textContent = totalQuantity;
//     totalPrice.textContent = `$RS{totalCost.toFixed(2)}`;
// }
// function showSuccessMessage() {
//     const successMessage = document.getElementById('success-message');

//     successMessage.textContent = "Success! Your checkout is complete.";
//     successMessage.style.display = "block";

//     setTimeout(() => {
//         successMessage.style.display = "none";
//     }, 3000);
// }


let totalItems = 0;
let totalPrice = 0;


function increaseQuantity(itemId) {
    const quantityInput = document.getElementById(`quantity${itemId}`);
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}


function decreaseQuantity(itemId) {
    const quantityInput = document.getElementById(`quantity${itemId}`);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}


function checkCart(itemId, itemPrice) {
    const quantityInput = document.getElementById(`quantity${itemId}`);
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(itemPrice);

    
    totalItems = quantity;
    totalPrice = price * quantity;

  
    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-price").textContent = `Rs:${totalPrice.toFixed(2)}`;
}


function resetCart() {
    
    totalItems = 0;
    totalPrice = 0;

    
    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-price").textContent = `Rs:0.00`;

    
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
        input.value = 1;
    });
}


function showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.textContent = "Thank you for shopping with us! Proceeding to checkout...";
    successMessage.style.display = "block";

    
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}


document.querySelector(".remove-btn").addEventListener("click", () => {
    checkCart(1, 200); 
});


populateOrderSummary();

