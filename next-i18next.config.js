const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr', 'en'],
    localePath: path.resolve('./public/locales'),
  },
};
