// Get DOM elements
const profileForm = document.getElementById('profileForm');
const profileName = document.querySelector('.profile-header h2');
const profileEmail = document.querySelector('.profile-header .email');
const statValues = document.querySelectorAll('.stat-value');

// Handle form submission
profileForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const dailyGoal = document.getElementById('dailyGoal').value;

    // Update profile information
    updateProfile(name, email, weight, height, dailyGoal);

    // Show success message
    alert('Profile updated successfully!');
});

// Function to update profile information
function updateProfile(name, email, weight, height, dailyGoal) {
    // Update header information
    profileName.textContent = name;
    profileEmail.textContent = email;

    // Update stat cards
    statValues[0].textContent = dailyGoal;
    statValues[1].textContent = weight;
    statValues[2].textContent = height;
}

// Add input validation
const numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) {
            this.value = 0;
        }
    });
}); 