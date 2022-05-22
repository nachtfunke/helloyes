const dateReadable = date => date.toLocaleDateString('de-de');
const dateGetYear = date => date.getFullYear();

module.exports = { dateGetYear, dateReadable };