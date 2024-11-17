function searchItems() {
    var input = document.getElementById('searchBar').value.toLowerCase();
    var recipeCards = document.querySelectorAll('.recipe-card');
    var ingredientCards = document.querySelectorAll('.ingredient-card');

    // Search in recipe cards
    recipeCards.forEach(function(card) {
        var cardName = card.getAttribute('data-name').toLowerCase();
        if (cardName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Search in ingredient cards
    ingredientCards.forEach(function(card) {
        var cardName = card.getAttribute('data-name').toLowerCase();
        if (cardName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
