const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "In three words I can sum up everything I’ve learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: " Dalai Lama",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling (from Harry Potter and the Chamber of Secrets)",
  },
];

const quoteQuote = document.querySelector("#quote-quote");
const quoteAuthor = document.querySelector("#quote-author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteQuote.innerText = `"${todaysQuote.quote}"`;
quoteAuthor.innerText = ` - ${todaysQuote.author}`;
