import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const EmptyState = ({image, title, subtitle}) => (
  <View style={styles.emptyStateContainer}>
    <Image
      source={image}
      style={styles.emptyStateImage}
      resizeMode="contain"
    />
    <Text style={styles.emptyStateTitle}>{title}</Text>
    <Text style={styles.emptyStateSubtitle}>{subtitle}</Text>
  </View>
)

EmptyState.propTypes = {
  image: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

EmptyState.defaultProps = {
  subtitle: '',
  title: '',
}

export default EmptyState
