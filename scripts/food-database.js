// Get DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const foodList = document.querySelector('.food-list');

// Sample food data (in a real application, this would come from a database)
const foodData = [
    {
        name: 'Apple',
        calories: 95,
        protein: '0.5g',
        carbs: '25g',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
    },
    {
        name: 'Green Salad',
        calories: 20,
        protein: '1g',
        carbs: '4g',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
    },
    {
        name: 'Pizza Slice',
        calories: 285,
        protein: '12g',
        carbs: '36g',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
    }
];

// Search functionality
searchButton.addEventListener('click', searchFood);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchFood();
    }
});

function searchFood() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFood = foodData.filter(food => 
        food.name.toLowerCase().includes(searchTerm)
    );
    displayFood(filteredFood);
}

function displayFood(foods) {
    foodList.innerHTML = '';
    foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>Calories: ${food.calories}</p>
                <p>Protein: ${food.protein}</p>
                <p>Carbs: ${food.carbs}</p>
            </div>
        `;
        foodList.appendChild(foodItem);
    });
} 