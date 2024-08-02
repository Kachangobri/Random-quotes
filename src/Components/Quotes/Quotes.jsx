import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "For God so loved the world that He gave His only begotten Son",
    author: "Bible",
  });

  useEffect(() => {
    const loadQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const quotesData = await response.json();
      setQuotes(quotesData); 
    };

    loadQuotes();
  }, []);

  const random = () => {
    if (quotes.length > 0) {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(select);
    }
  };

  return (
    <div className="container">
      <h1>Get inspired and motivated with great quotes</h1>
      <div className="containerfirst">
        <div className="quote">{quote.text}</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">{quote.author.split(",")[0]}</div>
            <button className="btn" onClick={random}>Click Here For More Quotes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
