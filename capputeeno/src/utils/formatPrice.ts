export function formatPrice(valueInCents: number) {
    const valueInReal = valueInCents / 100;
    return valueInReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}