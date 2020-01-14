const {utils: {bigNumberify: toBN}} = require('ethers');

const numberWithCommas = (n) => {
  n = typeof n === 'string' ? toBN(n) : n;

  return addCommas(n);
};

const addCommas = (n, returnEmpty) => {
  if (n === '' && returnEmpty) return '';

  const parts = n.toString().split('.');

  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '.00');
}

const money = (currency, amount = 0) => {
  return `${currency} ${numberWithCommas(amount)}`
};

export {
  toBN,
  numberWithCommas,
  addCommas,
  money,
};
