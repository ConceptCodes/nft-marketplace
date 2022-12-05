module.exports = {
  locales: ['en'], // Array with the languages that you want to use
  defaultLocale: 'en', // Default language of your website
  pages: {
    '*': ['common'], 
    '/': ['landing'],
    '/how-it-works': ['howItWorks'],
  },
};