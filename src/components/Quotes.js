import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  const [isDark, setDark] = useState(false);

  function handleDarkMode() {
    setDark(!isDark);
  }

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div id="quote-box">
      <button onClick={handleDarkMode} id="dark-mode-switch">
        Switch Dark/Light mode
      </button>

      <div id="text">
        <p>{quote}</p>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>

      <button onClick={handleClick} id="new-quote">
        New quote
      </button>
    </div>
  );
};

export default Quotes;
