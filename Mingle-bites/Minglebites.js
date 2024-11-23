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
    const recipeCards = document.querySelectorAll(".recipe-card");

    let hasResults = false; 

    recipeCards.forEach((card) => {
        const recipeName = card.getAttribute("data-name").toLowerCase();
        const cardText = card.querySelector("h3").textContent.toLowerCase(); 

        if (recipeName.includes(query) || cardText.includes(query)) {
            card.style.display = "block"; 
            hasResults = true; 
        } else {
            card.style.display = "none"; 
        }
    });

   
    const noResultsMessage = document.getElementById("noResultsMessage");
    if (query && !hasResults) {
        if (!noResultsMessage) {
            const message = document.createElement("p");
            message.id = "noResultsMessage";
            message.textContent = "No recipes found!";
            message.style.color = "red";
            message.style.textAlign = "center";
            document.querySelector(".content-container").appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}
