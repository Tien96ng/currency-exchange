import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {displayCurrency, otherCurrencyValidTest, otherCurrencyOption} from "./js/displayCurrency.js";


$(document).ready(() => {
  displayCurrency();
  $("#exchange-form").submit(event => {
    event.preventDefault();
    $(".error").empty();
    $(".result").empty();
    const usdAmount = parseInt($("#amount").val());
    let chosenCurrency = $("#to").val().toUpperCase();
    if(otherCurrencyOption(chosenCurrency)) {
      $("#equal-sign").hide();
      $("#to-label").text("Enter in Custom Currency");
      $("#currency-selector").empty();
      $("#currency-selector").append(`<input type="text" id="to" name="to" placeholder="For Example: AUD" maxlength="3" required>`);
    } else {
      otherCurrencyValidTest(chosenCurrency, usdAmount);
    }
  });
});
