export function currencyFormat(num, currency) {
    return currency + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }