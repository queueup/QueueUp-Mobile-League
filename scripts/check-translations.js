/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const languages = ['de', 'en', 'fr', 'nl', 'ru']
const languageLengths = []

const allEqual = array => !!array.reduce((a, b) => (a === b) ? a : NaN)

languages.forEach(language => {
  const languageLength = Object.keys(require('../app/i18n/locales/' + language + '.json')).length
  languageLengths.push(languageLength)
  console.log(language, languageLength)
})

process.exit(allEqual(languageLengths) ? 0 : 1)
