// ==========================================
// Feature 1: Dark/Light Mode Theme Toggle
// ==========================================
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
themeToggleBtn.addEventListener('click', function() {
body.classList.toggle('light-mode');
if (body.classList.contains('light-mode')) {
themeToggleBtn.textContent = ' Dark Mode';
} else {
themeToggleBtn.textContent = ' Light Mode';
}
});
// ==========================================
// Feature 2: Fast Pass Coin Calculator
// ==========================================
const calculateBtn = document.getElementById('calculateBtn');
const episodeInput = document.getElementById('episodeCount');
const coinTotalDisplay = document.getElementById('coinTotal');
const coinsPerEpisode = 5;
calculateBtn.addEventListener('click', function() {
let episodesToUnlock = parseInt(episodeInput.value);
if (isNaN(episodesToUnlock) || episodesToUnlock < 1) {
coinTotalDisplay.textContent = "Please enter a valid number.";
return;
}
let totalCoins = episodesToUnlock * coinsPerEpisode;
coinTotalDisplay.textContent = totalCoins + " Coins";
});
// ==========================================
// Feature 3: Interactive Arc Previews
// ==========================================
const arcItems = document.querySelectorAll('#arcList li');
const previewBox = document.getElementById('arcPreviewBox');
const previewImg = document.getElementById('arcPreviewImage');
const previewTitle = document.getElementById('arcPreviewTitle');
const previewDesc = document.getElementById('arcPreviewDesc');
arcItems.forEach(item => {
item.addEventListener('click', function() {
// Remove the active highlight from all items
arcItems.forEach(i => i.classList.remove('active-arc'));
// Add the active highlight to the clicked item
this.classList.add('active-arc');
// Extract data
const newImage = this.getAttribute('data-img');
const newTitle = this.getAttribute('data-title');
const newDesc = this.getAttribute('data-desc');
// Update the DOM
previewImg.src = newImage;
previewTitle.textContent = newTitle;
previewDesc.textContent = newDesc;
// Show the preview box
previewBox.classList.add('show-preview');
});
});