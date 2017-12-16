/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import { translateWithAlternatives } from 'deepl-translator'
import jsonfile from 'jsonfile'
import prompt from 'prompt'
import en from '../app/i18n/locales/en.json'

const languages = ['de', 'en', 'fr', 'nl', 'ru']
let currentLanguage = languages[0]
let translations = { en }
const attributes = Object.keys(en)
let currentAttributes = [...attributes]

const setTranslation = (language, attribute, value) => {
  translations = {
    ...translations,
    [language]: {
      ...translations[language],
      [attribute]: value,
    },
  }
}

const setLanguageTranslations = (language) => {
  translations[language] = require('../app/i18n/locales/'+ language +'.json') || {}
}

languages.forEach(language => setLanguageTranslations(language))

const next = () => {
  currentAttributes.splice(0, 1)
  if (currentAttributes.length > 0) {
    getTranslation()
  } else {
    const idx = languages.indexOf(currentLanguage)
    if (idx === languages.length - 1) {
      process.exit(0)
    } else {
      jsonfile.writeFileSync(
        './app/i18n/locales/'+ currentLanguage +'.json',
        translations[currentLanguage],
        { spaces: 2, EOL: '\r\n' }
      )
      currentLanguage = languages[idx + 1]
      currentAttributes = [...attributes]
      getTranslation()
    }
  }
}

const getTranslation = () => {
  if (!translations[currentLanguage][currentAttributes[0]]) {
    translateWithAlternatives(en[currentAttributes[0]], currentLanguage.toUpperCase(), 'EN')
      .then(res => {
        if (res.translationAlternatives && res.translationAlternatives.length > 0) {
          process.stdout.write('\x1B[2J')
          console.log(`[${currentLanguage}] ${en[currentAttributes[0]]}`)
          res.translationAlternatives.forEach((t, i) => console.log('  ' + i + ': ' + t))
          prompt.start()
          prompt.get(['translation'], function (err, result) {
            if (err) {
              process.exit(0)
            }
            const translation = result.translation.length < 3
              ? (result.translation.length < 1
                ? res.translationAlternatives[0]
                : res.translationAlternatives[parseInt(result.translation, 10)])
              : result.translation
            console.log('Selected:', translation)
            setTranslation(currentLanguage, currentAttributes[0], translation)
            next()
          })
        }
      })
      .catch(next)
  } else {
    next()
  }
}

getTranslation()
