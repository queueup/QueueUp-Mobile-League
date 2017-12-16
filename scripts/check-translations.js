/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const languages = ['de', 'en', 'fr', 'nl', 'ru']

languages.forEach(language => console.log(language, Object.keys(require('../app/i18n/locales/' + language + '.json')).length))
