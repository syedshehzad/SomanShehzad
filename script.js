const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const imageDisplay = document.getElementById('image-display');
const question = document.getElementById('question');

let hoverCount = 0; // Track how many times it has jumped

noButton.addEventListener('mouseover', () => {
    hoverCount++;

    if (hoverCount < 6) {
        // Phase 1: Jump to a random spot on screen
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'fixed'; // 'fixed' ensures it stays relative to the window
        noButton.style.transition = 'all 0.2s ease'; // Smooth jump
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    } else {
        // Phase 2: Escape! Fly off-screen to the right
        noButton.style.transition = 'all 1s ease-in'; 
        noButton.style.left = '150vw'; // Moves it way past the right edge
        noButton.style.transform = 'rotate(360deg)'; // Adds a little spin for flair
        
        // Optional: Change the question text once it flees
        setTimeout(() => {
            question.innerHTML = "Wait... where are you going? 😂";
        }, 500);
    }
});

// The Success logic remains the same
yesButton.addEventListener('click', () => {
    question.innerHTML = "Yay! See you then! ❤️";
    imageDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjc2czhucnoycmh1eTB4emFpcGo1NGxlNmxpZTdmb2czbWZwODI1bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lsJCkIKV6AT28/giphy.gif";
    noButton.style.display = 'none'; 
});