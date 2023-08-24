# Currency-info-map

Currency-info-map is a function to get the name and symbol of a currency.

## Installation

```
npm install currency-info-map
```

## Usage

Get info about a currency

```js
import getCurrencyInfo from "currency-info-map";

getCurrencyInfo("USD");
//Output: { name: "United States Dollar", symbol: "$" }
```

Get full currency map

```js
import currencyInfoMap from "currency-info-map/map.js";

console.log(currencyInfoMap);
/*
Output: 
{
  AED: { name: "United Arab Emirates Dirham", symbol: "د.إ" },
  AFN: { name: "Afghan Afghani", symbol: "؋" },
  ALL: { name: "Albanian Lek", symbol: "L" },
  AMD: { name: "Armenian Dram", symbol: "֏" },
  ...
}
*/
```

## License

[MIT](https://choosealicense.com/licenses/mit/) Licensed. Copyright (c) Ugis Jansons 2023.
