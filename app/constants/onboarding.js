import { knight, badge, technological } from '../images'
import I18n from '../i18n'

export const steps = [
  {
    index: 1,
    image: knight,
    title: I18n.t('onboarding_matchTitle'),
    description: I18n.t('onboarding_matchDescription'),
  },
  {
    index: 2,
    image: technological,
    title: I18n.t('onboarding_playTitle'),
    description: I18n.t('onboarding_playDescription'),
  },
  {
    index: 3,
    image: badge,
    title: I18n.t('onboarding_winTitle'),
    description: I18n.t('onboarding_winDescription'),
  },
]
