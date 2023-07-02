const validateValue = (value) => {
  if (value < 0 || value > 100 || typeof value !== 'number') {
    return false;
  }

  return true;
}

module.exports = validateValue;