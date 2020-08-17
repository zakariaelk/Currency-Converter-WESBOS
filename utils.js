// Let use this file for all the utility functions

/* 04. Let's format the currency using the Intl.NumberFormat() API - More on this on MDN */

export default function formatCurrency(amount, currencyToFormat) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyToFormat,
    }).format(amount);
}