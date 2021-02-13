# Currency Exchange

#### Currency exchange web app that takes in a USD amount (U.S Dollars) and displays the equivalent amount in the currency chosen.

#### By Tien Nguyen

## Technologies Used

* _HTML5/CSS3_
* _Bootstrap 4.6.0_
* _JavaScript ES6_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _Webpack 4.39.3_
* _Babel 7.6.4_
* _ESlint 6.3.0_
* _ExchangeRate-Api_

## Description

_Currency converter app using the [ExchangeRate-Api](https://www.exchangerate-api.com/), with current emphasis on getting foreign exchange rates from USD to another origin. A user should be able to type in an amount in U.S. dollars and then choose which currency it should be converted to (Example: AUD). By default, the choices are displayed in a dropdown. There is also an "Other" option if the user wants to manually search via input._

## Setup/Installation Requirements

### Installing NodeJS
1. _Install NodeJS from [Here!](https://nodejs.org/en/)_

### API Setup
1. _Navigate to [ExchangeRate-Api](https://www.exchangerate-api.com/) to acquire a personal API key._
2. _Enter your email address in the box labeled __"Your Email Address"__._
3. _Press the __"Get Free Key!"__ button._
4. _Finalize your new account creation on the following redirected page._
5. _Your API key should be on the account dashboard page following the account creation page._
6. _(Optional) You will also be emailed your API key on completion of the account creation._

### Local Environment Setup
1. _Clone the repo or download the ZIP file of the repo._
2. _Navigate to the main directory of the repo._
3. _Open the repo's main directory in the Code Editor of your choice._
4. _Create a new file named __".env"__._
5. _Enter the following in the .env file: __API_KEY="YOUR API KEY HERE"__ (Without the quotes)._
6. _Run the following in your terminal within the repo's main directory: __"npm install"__._
7. _When the installation is done, run the following in the terminal: __"npm run start"__._

## Known Bugs

* _None at the moment (2/13/2021)_

## Project Goals / Further Exploration

* _Currency Icons_
* _Currency of Origin Icons / Flags_
* _Interchangeable Currency conversions (For Example: AUD to EUR)._
* _Cache API Results in LocalStorage and fetch depending on date (For Example: Fetch API again if Date > 2 Weeks old)._
* _Show Currency changes over a specific time frame (+/-)._

## License
_This software is licensed under the MIT license_
Copyright (c) 2021 __Tien Nguyen__

## Contact Information
_<Tien96ng@github.com>_