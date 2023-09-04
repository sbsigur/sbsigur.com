document.addEventListener("DOMContentLoaded", function() {
    const quoteButton = document.getElementById("quoteButton");
    const quoteText = document.getElementById("quoteText");

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `${data.content} —${data.author}`;
    };

    quoteButton.addEventListener("click", async function() {
        const quote = await fetchQuote();
        quoteText.textContent = quote;
    });
});
