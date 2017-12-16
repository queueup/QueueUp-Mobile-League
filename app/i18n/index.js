import I18n from 'react-native-i18n'

import de from './locales/de.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import nl from './locales/nl.json'
import ru from './locales/ru.json'

I18n.fallbacks = true

I18n.translations = {
  de,
  en,
  fr,
  nl,
  ru,
}

export default I18n
