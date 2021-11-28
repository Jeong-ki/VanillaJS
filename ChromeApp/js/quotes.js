// 랜덤 문구

const quotes = [
  {
    quote: "글귀1",
    author: "저자1"
  },
  {
    quote: "글귀2",
    author: "저자2"
  },
  {
    quote: "글귀3",
    author: "저자3"
  },
  {
    quote: "글귀4",
    author: "저자4"
  },
  {
    quote: "글귀5",
    author: "저자5"
  },
  {
    quote: "글귀6",
    author: "저자6"
  },
  {
    quote: "글귀7",
    author: "저자7"
  },
  {
    quote: "글귀8",
    author: "저자8"
  },
  {
    quote: "글귀9",
    author: "저자9"
  },
  {
    quote: "글귀10",
    author: "저자10"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;