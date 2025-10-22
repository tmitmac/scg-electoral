// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    // This would be used for any interactive elements
    console.log('SquareVote Electoral Commission website loaded');
    
    // Example: Fetch news articles from API
    async function fetchNews() {
        try {
            const response = await fetch('https://api.example.com/electoral-news');
            const data = await response.json();
            // Process news data
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    
    // Uncomment to fetch news when needed
    // fetchNews();
});

// Accessibility enhancements
function increaseFontSize() {
    const html = document.documentElement;
    let fontSize = window.getComputedStyle(html, null).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize) * 1.1;
    html.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
    const html = document.documentElement;
    let fontSize = window.getComputedStyle(html, null).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize) * 0.9;
    html.style.fontSize = fontSize + 'px';
}

// This would be connected to UI buttons for accessibility
window.increaseFontSize = increaseFontSize;
window.decreaseFontSize = decreaseFontSize;