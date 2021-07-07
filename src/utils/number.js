export function format(number) {
    return (typeof number === 'number') ? number.toLocaleString('fr') : number
}

export function integersOnly(value) {
    return value.replace(/[^0-9]/gim, '')
}

export function range(start, end) {
    const number = []
    // eslint-disable-next-line no-plusplus
    for (let i = start; i <= end; i++) {
        number.push(i)
    }
    return number
}
