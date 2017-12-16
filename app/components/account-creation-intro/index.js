import React from 'react'
import { Actions } from 'react-native-router-flux'
import SimplePage from '../simple-page'
import { mapsAndFlags } from '../../images'

import I18n from '../../i18n'

const AccountCreationIntro = () => (
  <SimplePage
    image={mapsAndFlags}
    title={I18n.t('accountCreationIntro_title')}
    description={I18n.t('accountCreationIntro_description')}
    buttonAction={() => Actions.replace('accountCreationForm')}
    buttonText={I18n.t('accountCreationIntro_button').toUpperCase()}
  />
)

AccountCreationIntro.propTypes = {}

AccountCreationIntro.defaultProps = {}

export default AccountCreationIntro
