// DOM Elements
const usernameInput = document.getElementById('username');
const themeSelect = document.getElementById('theme');
const savePrefsBtn = document.getElementById('savePrefs');
const animateBtn = document.getElementById('animateBtn');
const resetBtn = document.getElementById('resetBtn');
const animatedBox = document.getElementById('animatedBox');
const body = document.body;

// Load saved preferences when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
});

// Function to save preferences to localStorage
function savePreferences() {
    const preferences = {
        username: usernameInput.value,
        theme: themeSelect.value
    };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    applyTheme(preferences.theme);
    
    // Show confirmation animation
    savePrefsBtn.textContent = 'Saved!';
    savePrefsBtn.style.backgroundColor = '#2E7D32';
    setTimeout(() => {
        savePrefsBtn.textContent = 'Save Preferences';
        savePrefsBtn.style.backgroundColor = '#4CAF50';
    }, 1500);
}

// Function to load preferences from localStorage
function loadPreferences() {
    const savedPrefs = localStorage.getItem('userPreferences');
    if (savedPrefs) {
        const preferences = JSON.parse(savedPrefs);
        usernameInput.value = preferences.username;
        themeSelect.value = preferences.theme;
        applyTheme(preferences.theme);
    }
}

// Function to apply theme
function applyTheme(theme) {
    // Remove all theme classes first
    body.classList.remove('light', 'dark', 'blue');
    
    // Add the selected theme class
    body.classList.add(theme);
}

// Function to trigger animation
function triggerAnimation() {
    animatedBox.classList.add('animated');
    
    // Remove the class after animation completes to allow re-triggering
    setTimeout(() => {
        animatedBox.classList.remove('animated');
    }, 2000);
}

// Function to reset animation
function resetAnimation() {
    animatedBox.classList.remove('animated');
    // Force reflow to reset animation immediately
    void animatedBox.offsetWidth;
}

// Event Listeners
savePrefsBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', triggerAnimation);
resetBtn.addEventListener('click', resetAnimation);