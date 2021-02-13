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
    return currencies;
  }
}

export async function converter(usd, currency) {
  const currenciesMap = (await displayCurrency());
  let result = await (usd * currenciesMap.get(currency));
  $(".usd-amount").text(`${usd} USD`);
  $(".converted-amount").text(`${result.toFixed(2)} ${currency}`);
  $("#equal-sign").show();
  return result;
}

export function otherCurrencyOption(option) {
  return option === "OTHER" ? true : false;
}

export function otherCurrencyValidTest(chosenCurrency, usdAmount) {
  return displayCurrency()
    .then(response => response.has(chosenCurrency) ? converter(usdAmount, chosenCurrency) : $(".error").text(`"Other" currency you entered is invalid or cannot be found.`)
    && $("#equal-sign").hide());
}