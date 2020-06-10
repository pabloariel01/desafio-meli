module.exports = (currency, price) => {
  return {
    currency: currency,
    ammount: Math.floor(price),
    decimals: +(price % 1).toFixed(2),
  };
};
