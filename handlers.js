// For all Handlers (we only have one here)

import { convert } from './lib.js';
import { fromAmount, toAmount, fromSelect, toSelect } from './elements.js';
import formatCurrency from './utils.js';


/* 05. Handle Input Function */
// Track the input value on each field of the form
// We use those values as arguments for a convert function which we'd create. We're storing this convert() result in a 'rawConverted' variable, as we will get a result without the currency symbol. 

// For that we will create a formatCurrency function which will be using another API 'Intl.NumberFormat'. This API requires (amount, currency code) in this case (rawConverted, toSelect.value)

// And finally we set the result of the formatCurrency function inside the toAmount input field.

export default async function handleInput(e) {

    const rawConverted = await convert(fromAmount.value, fromSelect.value, toSelect.value);

    toAmount.textContent = formatCurrency(rawConverted, toSelect.value);
}
