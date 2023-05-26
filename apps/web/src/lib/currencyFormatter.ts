export const currencyFormatter = (num: number) => {
    const numberFormat = new Intl.NumberFormat('fi-FI', {
        style: 'currency',
        currency: 'EUR'
    })
    return numberFormat.format(num)
}
