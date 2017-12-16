import React from 'react'
import { sandClock } from '../../images'
import SimplePage from '../simple-page'

import I18n from '../../i18n'

const LoadingPage = () => (
  <SimplePage
    image={sandClock}
    title={I18n.t('loadingPage_title')}
    description={I18n.t('loadingPage_description')}
  />
)

LoadingPage.propTypes = {}

LoadingPage.defaultProps = {}

export default LoadingPage
