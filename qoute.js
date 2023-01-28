const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const nextButton = document.getElementById("next-quote-btn");
const twitterLogo = document.getElementById("twitter-logo");

let data = [];
function randomQuote() {
  const quote = data[Math.floor(Math.random() * data.length)];
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  if (!quote.author) {
    quoteAuthor.textContent = "anonymous";
  } else {
    quoteAuthor.textContent = quote.author;
  }
}
async function getQuotes() {
  // Make an HTTP request to the Type Fit API
  try {
    const response = await fetch("https://type.fit/api/quotes");
    // Parse the response as JSON
    data = await response.json();
    randomQuote();
  } catch (error) {}
}
getQuotes();
function tweetQuote() {
  const twitterUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}
nextButton.addEventListener("click", randomQuote);
twitterLogo.addEventListener("click", tweetQuote);
