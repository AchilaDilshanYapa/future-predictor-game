const futureEvents = [
    "will become a famous YouTuber with millions of subscribers",
    "will invent a revolutionary AI-powered coffee maker",
    "will discover a new species of rainbow-colored butterflies",
    "will win a dance competition on Mars",
    "will create a bestselling video game played by billions",
    "will become the first person to have a pet dragon (it's actually just a lizard)",
    "will start a successful chain of zero-gravity restaurants",
    "will become a professional cloud sculptor",
    "will discover a way to communicate with house plants",
    "will become a time-traveling food critic"
];

const timeframes = [
    "in the next 5 years",
    "by the age of 40",
    "sometime before 2030",
    "when you least expect it",
    "after learning to juggle",
    "during a full moon",
    "while on vacation",
    "after eating a mysterious fortune cookie",
    "during a solar eclipse",
    "on a rainy Tuesday"
];

function predictFuture() {
    const birthYearInput = document.getElementById('birthYear');
    const predictionDiv = document.getElementById('prediction');
    const birthYear = parseInt(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        alert('Please enter a valid birth year between 1900 and ' + currentYear);
        return;
    }

    const age = currentYear - birthYear;
    const randomEvent = futureEvents[Math.floor(Math.random() * futureEvents.length)];
    const randomTimeframe = timeframes[Math.floor(Math.random() * timeframes.length)];

    const prediction = `At the age of ${age}, you ${randomEvent} ${randomTimeframe}! 🎉`;
    
    predictionDiv.textContent = prediction;
    predictionDiv.style.display = 'block';

    // Add animation effect by removing and re-adding the element
    predictionDiv.style.animation = 'none';
    predictionDiv.offsetHeight; // Trigger reflow
    predictionDiv.style.animation = 'fadeIn 0.5s ease-in';
}