export default class Helper{
    static formatCurrency (value: number, currency: string = 'USD'): string{
        return value.toLocaleString('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 0});
    }

    static formatNumber (value: number): string{
        return value.toLocaleString('en-US', {minimumFractionDigits: 0});
    }
}