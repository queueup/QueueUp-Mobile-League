import React from 'react'
import {
  Image,
} from 'react-native'
import {
  View as AnimatedView,
} from 'react-native-animatable'
import PropTypes from 'prop-types'
import {
  languages,
} from '../../../images'
import styles from '../styles'

export const Locales = ({ locales }) => (
  <AnimatedView style={styles.localesContainer} animation="fadeInRight" delay={800} duration={300}>
    {locales.map(l => <Image
      key={l}
      resizeMode="contain"
      source={languages[l]}
      style={styles.localeImage}
    />)}
  </AnimatedView>
)

Locales.propTypes = {
  locales: PropTypes.array,
}

Locales.defaultProps = {
  locales: {},
}

