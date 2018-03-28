
// Ƀitcoin price API

document.addEventListener("DOMContentLoaded", function (event) {

  let minimalist = document.getElementById("btc-minimalist");
  let classic = document.getElementById("btc-classic");
  let keyring = document.getElementById("btc-keyring");

  let API = new XMLHttpRequest();

  API.onreadystatechange = function() {
    if (API.readyState == 4 && API.status == 200) {
      var data = JSON.parse(API.responseText);
      var oneBtc = data.bpi.GBP.rate_float;
      // ZAR/GBP is currently hard coded.
      var onePound = 16.68;
      var oneMin = ((399/onePound)/oneBtc).toFixed(4);
      var oneClass = ((499/onePound)/oneBtc).toFixed(4);
      var oneKey = ((99/onePound)/oneBtc).toFixed(4);
      // Place into DOM
      minimalist.innerText = oneMin;
      classic.innerText = oneClass;
      keyring.innerText = oneKey;
    }
  }

  API.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  API.send();
});