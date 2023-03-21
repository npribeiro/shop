export const { format: formatPrice } = new Intl.NumberFormat('pt', {
    // minimumFractionDigits: 2,
    style: 'currency',
    currency: 'EUR',
  })