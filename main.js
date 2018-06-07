
// Ƀitcoin price API

document.addEventListener("DOMContentLoaded", function (event) {

  let minimalist = document.getElementById("btc-minimalist");
  let classic = document.getElementById("btc-classic");
  let keyring = document.getElementById("btc-keyring");
  let belt = document.getElementById("btc-belt");

  let API = new XMLHttpRequest();

  API.onreadystatechange = function () {
    if (API.readyState == 4 && API.status == 200) {
      var data = JSON.parse(API.responseText);
      var btc_gbp = data.bpi.GBP.rate_float;
      // ZAR/GBP is currently hard coded.
      var gbp = 17.1;
      var minimalistBtcPrice = ((399 / gbp) / btc_gbp).toFixed(4);
      var classicBtcPrice = ((499 / gbp) / btc_gbp).toFixed(4);
      var keyringBtcPrice = ((99 / gbp) / btc_gbp).toFixed(4);
      var beltBtcPrice = ((599 / gbp) / btc_gbp).toFixed(4);
      // Place into DOM
      minimalist.innerText = minimalistBtcPrice;
      classic.innerText = classicBtcPrice;
      keyring.innerText = keyringBtcPrice;
      belt.innerText = beltBtcPrice;
    }
  }

  API.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  API.send();
});