import currencies from './currencies.js';
import { fromSelect, toSelect } from './elements.js';

export function initApp() {
    /* 01. Displaying Currencies in our dropdown Selector */

    // First things first, let's get those currencies out from the object and into our form selectors
    // Let's use the Object.entries() method to convert our currencies object to an Array
    // Then we use .map() to loop over the entries and set our HTML for each entry
    // We then join all entries with .join()

    const currenciesHTML = Object.entries(currencies)
        .map(entry => `<option value="${ entry[0] }"> ${ entry[0] } - ${ entry[1] } </option>`)
        .join(" ");

    // Let's set our fromSelect & toSelect selectors to the above newly created html
    // This should show us all currencies in both selectors
    fromSelect.innerHTML = currenciesHTML;
    toSelect.innerHTML = currenciesHTML;
}