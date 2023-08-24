import map from "./map.js";

function getCurrencyInfo(ticker) {
  if (typeof ticker !== "string") return undefined;

  const currencyCode = ticker.toUpperCase();

  if (!Object.hasOwn(map, currencyCode)) return undefined;
  return map[ticker];
}

export default getCurrencyInfo;
