function generate() {
  let ranNum = Math.floor(Math.random() * quoteArray.length);
  document.querySelector("blockquote").innerText = quoteArray[ranNum].text;
  document.querySelector("cite").innerText = quoteArray[ranNum].author;
  console.log(ranNum);
};
