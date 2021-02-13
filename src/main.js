import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {displayCurrency, converter, otherCurrencyOption} from "./js/displayCurrency.js";


$(document).ready(() => {
  displayCurrency();
  $("#exchange-form").submit(event => {
    event.preventDefault();
    const usdAmount = parseInt($("#amount").val());
    let chosenCurrency = $("#to").val();
    if(otherCurrencyOption(chosenCurrency)) {
      $("#to-label").text("Enter in Custom Currency")
      $("#currency-selector").empty();
      $("#currency-selector").append(`<input type="text" id="to" name="to" placeholder="For Example: WON" maxlength="3" required>`);
    } else {
      displayCurrency()
        .then(response => response.has(chosenCurrency) ? 
          converter(usdAmount, chosenCurrency) : 
          $(".error").text(`"Other" currency you entered is invalid or cannot be found.`));
    }
    
  });
});
