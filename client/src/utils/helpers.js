export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });
};
