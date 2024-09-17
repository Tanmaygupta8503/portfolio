// script.js

// Number of trail elements
const trailLength = 10;

// Create and append trail elements
const trailContainer = document.getElementById('trail');
const trailDots = [];

for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    trailContainer.appendChild(dot);
    trailDots.push(dot);
}

// Update trail positions on mousemove
document.addEventListener('mousemove', (event) => {
    let { clientX: x, clientY: y } = event;

    trailDots.forEach((dot, index) => {
        const delay = trailLength - index - 1;
        setTimeout(() => {
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
        }, delay * 30); // Adjust timing for smoother effect
    });
});
