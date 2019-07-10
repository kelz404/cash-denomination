module.exports = input => {
  let filtered = '';
  filtered = input.replace(/^(Rp|Rp\s)/, '').trim();

  const matchAll = new RegExp(/(?=.*\d)^((\d{1,3}(\.\d{3})*)|\d+)*(,\d{2})?$/g).test(filtered);
  const wrongPosition = new RegExp(/(Rp)$/g).test(filtered);
  const invalidSeparator = new RegExp(/^\d{1,3}([,\s]\d{2})/g).test(filtered);

  const objValidate = {
    isValid: false,
  };

  if (!filtered) {
    objValidate.errorMsg = 'Missing value';
  } else if (matchAll) {
    const filterComma = filtered.replace(/(,\d{2})$/, '');
    const validSeparator = new RegExp(/(^\d{1,3}(\.\d{3})*|^\d+)$/g).test(filterComma);
    if (validSeparator) {
      if (filterComma > Number.MAX_SAFE_INTEGER) {
        objValidate.errorMsg = 'Number too large!';
      } else {
        objValidate.input = '';
        objValidate.errorMsg = '';
        objValidate.isValid = true;
        objValidate.result = filterComma;
      }
    } else {
      objValidate.errorMsg = 'Incorrect format separator';
    }
  } else {
    if (invalidSeparator) {
      objValidate.errorMsg = 'Invalid separator';
    } else if (wrongPosition) {
      objValidate.errorMsg = 'Valid character in wrong position';
    } else {
      objValidate.errorMsg = 'Invalid format input';
    }
  }

  return objValidate;
};
