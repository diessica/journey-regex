module.exports = function (string) {
  return /^[^0-9][^A-Z]/.test(string);
};
