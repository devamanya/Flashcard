// 1. Data State
const flashcards = [
    { q: "What is a Closure?", a: "A function that remembers its outer variables even after the outer function has returned." },
    { q: "What does 'Hoisting' mean?", a: "JavaScript's behavior of moving declarations to the top of the current scope." },
    { q: "Difference between == and ===?", a: "== checks value only (with coercion), while === checks both value and type." },
    { q: "What is the DOM?", a: "Document Object Model - a programming interface for web documents." },
    { q: "What is an IIFE?", a: "Immediately Invoked Function Expression - a function that runs as soon as it is defined." }
];

let currentIndex = 0;

// 2. DOM Elements
const cardElement = document.getElementById('flashcard');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 3. Core Logic (State Management)
function updateUI() {
    const currentCard = flashcards[currentIndex];
    
    // Update Text
    questionText.textContent = currentCard.q;
    answerText.textContent = currentCard.a;
    
    // Reset Flip state when moving to new card
    cardElement.classList.remove('is-flipped');
    
    // Update Progress
    const progressPercent = ((currentIndex + 1) / flashcards.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
    
    // Button States
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === flashcards.length - 1;
}

// 4. Event Listeners
document.getElementById('flip-btn').addEventListener('click', () => {
    cardElement.classList.toggle('is-flipped');
});

cardElement.addEventListener('click', () => {
    cardElement.classList.toggle('is-flipped');
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateUI();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateUI();
    }
});

// Initialize App
updateUI();
