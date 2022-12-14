const quotes = require("./quotes.json");

const printRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  console.log(
    `"${quotes[randomIndex]["Quote"]}" - ${quotes[randomIndex]["Author"]}`
  );
};

const printQuoteByTag = (tag) => {
  const taggedQuotes = quotes.filter((quote) => quote["Tags"].includes(tag));
  // const taggedQuotes = quotes.filter((quote) => quote["Category"] === tag);
  const randomIndex = Math.floor(Math.random() * taggedQuotes.length);

  console.log(
    `\n"${taggedQuotes[randomIndex]["Quote"]}" - ${taggedQuotes[randomIndex]["Author"]}`
  );
};

const getUserInput = () => {
  const readline = require("readline");

  // create interface for input and output
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // create empty user input
  let userInput = "";

  // question user to enter name
  rl.question(
    `Please choose a theme for the quote.

    The Options are: humor, work, happiness, courage, love, strength, trust, life, truth, philosophy\n`,
    function (string) {
      userInput = string;

      console.log(`\nYour theme is: ${userInput}`);

      // close input stream
      rl.close();

      printQuoteByTag(userInput);
    }
  );
};

getUserInput();

// printQuoteByTag();

// printRandomQuote();
