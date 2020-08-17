// Let's use this file to store our Main Functionality modules

export const endpoint = 'https://api.exchangeratesapi.io/latest'
export const ratesByBase = {};

/* 02. Fetching exchange rate from our API */

export async function fetchRates(base = "USD") {
    const res = await fetch(`${ endpoint }?base=${ base }`);
    const rates = await res.json();
    return rates;
}


/* 03. Create Convert Function. This function should have 3 arguments (amount, fromCurrency, toCurrency)*/

export async function convert(amount, fromCurrency, toCurrency) {

    // To avoid fetching everytime we type or remove a digit, we need to cache the currently used base rates, and for that we'll use an empty object.

    // We check if we have already that base rate in our rateByBase object, if yes, we proceed directly with the conversion using the existing info in our rateByBase. 

    // IF NOT, let's log a message and fetch our new base rate with our 'fromCurrency' and append the result to our rateByBase[fromCurrency] so that it's available outside the if() scope.

    if (!ratesByBase[fromCurrency]) {
        console.log(`to bad, we don't have ${ fromCurrency } in our Rates Base Object`);
        const conversionRate = await fetchRates(fromCurrency);
        ratesByBase[fromCurrency] = conversionRate;
    }

    const converted = amount * ratesByBase[fromCurrency].rates[toCurrency];

    console.log(`${ amount } in ${ fromCurrency } is ${ converted } in ${ toCurrency }`);

    return converted;

}
