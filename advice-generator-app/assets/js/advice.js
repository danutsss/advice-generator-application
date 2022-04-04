var getAdvice = document.getElementById('get-advice');
var adviceID = document.querySelector('.advice-id');
var adviceQuote = document.querySelector('.advice-quote');

getAdvice.onclick = function() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        adviceID.textContent = "Advice #" + data.slip.id;
        adviceQuote.textContent = data.slip.advice;
    });
}