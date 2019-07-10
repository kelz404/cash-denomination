module.exports = (denomination, input) => {
  let number = parseFloat(input.split('.').join(''));
  const objRupiah = {};
  const result = [];

  for (let i = 0; i < denomination.length; i++) {
    if (number >= denomination[i]) {
      objRupiah[denomination[i]] = Math.floor(number / denomination[i]);
      number -= objRupiah[denomination[i]] * denomination[i];
    }
  }

  objRupiah['left'] = number;

  for (const item in objRupiah) {
    const rupiah = {};
    rupiah[item] = objRupiah[item];
    result.push(rupiah);
  }

  return result;
};
