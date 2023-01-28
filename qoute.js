var quoteContainer = document.getElementById("quote-container");

async function getQuotes() {
  // Make an HTTP request to the Type Fit API
  const response = await fetch("https://type.fit/api/quotes");
  // Parse the response as JSON
  const data = await response.json();
  // Get a random quote
  const quote = data[Math.floor(Math.random() * data.length)];
  return quote;
}
var quoteContainer = document.getElementById("quote-container");
var nextButton = document.getElementById("next-quote-btn");
var twitterLogo = document.getElementById("twitter-logo");

nextButton.addEventListener("click", async function () {
  const quote = await getQuotes();
  // Update the quote container with the quote from the API
  quoteContainer.innerHTML =
    "<p id='quote'>" +
    quote.text +
    "</p><span id='quote-author'>" +
    (quote.author ? quote.author : "anonymous") +
    "</span>";
  quoteContainer.appendChild(nextButton);
  quoteContainer.appendChild(twitterLogo);
});
var twitterLogo = document.getElementById("twitter-logo");

// Add an event listener to the Twitter logo
twitterLogo.addEventListener("click", function () {
  // Get the current quote
  var quote = document.getElementById("quote").innerText;
  window.open(`https://www.twitter.com/intent/tweet?text=${quote}`, "_blank");
});
