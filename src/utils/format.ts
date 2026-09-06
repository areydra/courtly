export function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatRupiah(amount: number): string {
    const withSeparators = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `Rp${withSeparators}`;
}
