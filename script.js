// Select all color buttons
const buttons = document.querySelectorAll('.button');

// Select the reset button
const resetButton = document.getElementById('reset');

// Change background color on button click
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const color = btn.id; // Get the button's ID (color name)
        document.body.style.backgroundColor = color; // Change background color
    });
});

// Reset the background color
resetButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'; // Reset to white
});