import $ from 'jquery';
import ExchangeService from "./exchange-service.js";

export async function displayCurrency() {
  const response = await ExchangeService.usdExchangeRate();
  if(response["error-type"]) {
    $(".error").text(`Please check your API Endpoint Call: ${response["error-type"]}`);
  } else {
    const currencies = new Map();
    for (const property in response.conversion_rates) {
      currencies.set(property, response.conversion_rates[property]);
    }
    currencies.forEach((value, key) => {
      $("#to").append(`<option value="${key}">${key}</option>`);
    });
  }
}

export async function converter(usd, currency) {
  const result = await (usd * currency);
  console.log(result);
  return result;
}