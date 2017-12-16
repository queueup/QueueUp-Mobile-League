import React from 'react'
import {
  Image,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { background } from '../../images'
import styles from './styles'

const BackgroundView = ({ children }) => (
  <View style={styles.appContainer}>
    <Image source={background} style={styles.backgroundImage} resizeMode="contain" />
    {children}
  </View>
)

BackgroundView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
}

BackgroundView.defaultProps = {
  children: null,
}

export default BackgroundView
