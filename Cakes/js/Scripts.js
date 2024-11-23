// function searchItems() {
//     var input = document.getElementById('searchBar').value.toLowerCase();
//     var recipeCards = document.querySelectorAll('.recipe-card');
//     var ingredientCards = document.querySelectorAll('.ingredient-card');

//     recipeCards.forEach(function(card) {
//         var cardName = card.getAttribute('data-name').toLowerCase();
//         if (cardName.includes(input)) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });

//     ingredientCards.forEach(function(card) {
//         var cardName = card.getAttribute('data-name').toLowerCase();
//         if (cardName.includes(input)) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }


function searchItems() {
    const searchBar = document.getElementById("searchBar");
    const query = searchBar.value.toLowerCase().trim(); 
    const cakeItems = document.querySelectorAll(".cake-item"); 

    let hasResults = false; 

    cakeItems.forEach((item) => {
        const cakeName = item.querySelector(".cake-name").textContent.toLowerCase(); 
        const cakeDescription = item.querySelector("p:nth-of-type(2)").textContent.toLowerCase(); 

        if (cakeName.includes(query) || cakeDescription.includes(query)) {
            item.style.display = "block"; 
            hasResults = true; 
        } else {
            item.style.display = "none";
        }
    });

   
    const noResultsMessage = document.getElementById("noResultsMessage");
    if (query && !hasResults) {
        if (!noResultsMessage) {
            const message = document.createElement("p");
            message.id = "noResultsMessage";
            message.textContent = "No cakes found!";
            message.style.color = "red";
            message.style.textAlign = "center";
            document.querySelector(".gallery").appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}
