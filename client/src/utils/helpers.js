export const formatCurrency = (amt, digits) => {
  return amt.toLocaleString("ro-RO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
};
