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
    const chosenCurrency = $("#to").val();
    otherCurrencyOption(chosenCurrency);
    converter(usdAmount, chosenCurrency);
    
  });
});
