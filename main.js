function generate() {
  let ranNum = Math.floor(Math.random() * quoteArray.length);
  document.querySelector("blockquote") = quoteArray[ranNum].text;
  document.querySelector("cite") = quoteArray[ranNum].author;
};
console.log("Hello");
