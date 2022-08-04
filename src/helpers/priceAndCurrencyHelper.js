import { TAX } from '../constants/price';

export const getPriceStrByCurrency = (prices, currentCurrency) => {
    const price = prices.find((price) => price.currency.label === currentCurrency.label)
    return `${price.currency.symbol}${price.amount.toFixed(2)}`
}

export const calcTotal = (cartItems, currentCurrency) => cartItems.reduce((acc, nextItem) => {
    const priceInfo = nextItem.prices.find(price => price.currency.label === currentCurrency.label)
    return acc + (priceInfo.amount * nextItem.amount)
}, 0).toFixed(2)

export const calcTax = totalWithoutTax => (totalWithoutTax * TAX).toFixed(2)

export const calcAmount = (cartItems) => cartItems.reduce((acc, nextItem) => acc + nextItem.amount, 0)
