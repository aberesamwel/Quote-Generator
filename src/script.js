// Array of quotes for each mood
const quotes = {
    happy: [
        "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
        "For every minute you are angry, you lose sixty seconds of happiness. – Ralph Waldo Emerson",
        "Happiness is a warm puppy. – Charles M. Schulz"
    ],
    sad: [
        "Sadness flies away on the wings of time. – Jean de La Fontaine",
        "Tears come from the heart and not from the brain. – Leonardo da Vinci",
        "When you’re sad, you’re never really sad. You’re just another layer of human being being peeled away. – Margaret Cho"
    ],
    motivational: [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else is going to do it for you."
    ],
    inspirational: [
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson"
    ]
};
document.getElementById("demo").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;

// Function to generate a quote based on mood
function generateQuote(mood) {
    const quoteArray = quotes[mood];
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    document.getElementById('quote').textContent = quoteArray[randomIndex];
}
