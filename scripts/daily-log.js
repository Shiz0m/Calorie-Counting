// Get DOM elements
const foodForm = document.getElementById('foodForm');
const entriesList = document.getElementById('entriesList');
const totalCaloriesElement = document.getElementById('totalCalories');
const totalProteinElement = document.getElementById('totalProtein');
const totalCarbsElement = document.getElementById('totalCarbs');

// Initialize totals
let totalCalories = 0;
let totalProtein = 0;
let totalCarbs = 0;

// Handle form submission
foodForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const foodName = document.getElementById('foodName').value;
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);

    // Add entry to the list
    addFoodEntry(foodName, calories, protein, carbs);

    // Update totals
    updateTotals(calories, protein, carbs);

    // Reset form
    foodForm.reset();
});

// Function to add a food entry
function addFoodEntry(name, calories, protein, carbs) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry-item';
    entryDiv.innerHTML = `
        <div class="entry-info">
            <h3>${name}</h3>
            <p>Calories: ${calories}</p>
            <p>Protein: ${protein}g</p>
            <p>Carbs: ${carbs}g</p>
        </div>
        <button class="delete-btn" onclick="deleteEntry(this, ${calories}, ${protein}, ${carbs})">Delete</button>
    `;
    entriesList.appendChild(entryDiv);
}

// Function to update totals
function updateTotals(calories, protein, carbs) {
    totalCalories += calories;
    totalProtein += protein;
    totalCarbs += carbs;

    totalCaloriesElement.textContent = totalCalories;
    totalProteinElement.textContent = totalProtein + 'g';
    totalCarbsElement.textContent = totalCarbs + 'g';
}

// Function to delete an entry
function deleteEntry(button, calories, protein, carbs) {
    // Update totals
    totalCalories -= calories;
    totalProtein -= protein;
    totalCarbs -= carbs;

    totalCaloriesElement.textContent = totalCalories;
    totalProteinElement.textContent = totalProtein + 'g';
    totalCarbsElement.textContent = totalCarbs + 'g';

    // Remove the entry
    button.parentElement.remove();
} 