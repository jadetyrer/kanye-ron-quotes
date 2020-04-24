const kanyeQuoteUrl = "https://api.kanye.rest/"
const memeUrl = "https://api.imgflip.com/get_memes"
const ronQuoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/1"

let kanye = document.getElementById("kanye-button");
kanye.addEventListener("click", () => getKanyeQuote(kanyeQuoteUrl));

let ron = document.getElementById("ron-button");
ron.addEventListener("click", () => getRonQuote(ronQuoteUrl));

function getKanyeQuote() {
	fetch(kanyeQuoteUrl).then((response) => response.json())
		.then((quoteData) => showKanyeQuote(quoteData))
		.catch((error) => console.error(error))
}

function getRonQuote() {
	fetch(ronQuoteUrl).then((response) => response.json())
		.then((quoteData) => showRonQuote(quoteData))
		.catch((error) => console.error(error))
}

function getMeme() {
	fetch(memeUrl).then((response) => response.json())
		.then((memedata) => showMeme(memedata))
		.catch((error) => console.error(error))
}

function showKanyeQuote(quoteData) {
  let response = document.getElementById("response");
  response.innerHTML = null;
  let quote = document.createElement("p");
  quote.textContent = quoteData.quote;
  response.appendChild(quote);
}

function showRonQuote(quoteData) {
  let response = document.getElementById("response");
  response.innerHTML = null;
  let quote = document.createElement("p");
  quote.textContent = quoteData[0];
  response.appendChild(quote);
}

getMeme();

function showMeme(data) {
  let array = data.data.memes;
  let random = Math.floor(Math.random() * array.length)
  let meme = array[random].url
  let memeDiv = document.getElementById("meme-div");
  let memeImage = document.createElement("img");
  memeImage.setAttribute("src", meme)
  memeImage.setAttribute("height", 500)
  memeDiv.appendChild(memeImage)
}

