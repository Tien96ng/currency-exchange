import $ from 'jquery';
import ExchangeService from "./exchange-service.js";

export default async function displayCurrency() {
  const response = await ExchangeService.usdExchangeRate();
  const currencies = new Map();
  for (const property in response.conversion_rates) {
    currencies.set(property, response.conversion_rates[property])
  }
  currencies.forEach((value, key) => {
    $("#to").append(`<option value="${key}">${key}</option>`)
  });
}