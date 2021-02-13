import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {displayCurrency, converter} from "./js/displayCurrency.js";


$(document).ready(() => {
  displayCurrency();
  converter(1, 3.6725);

});
