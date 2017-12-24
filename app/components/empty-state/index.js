import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const EmptyState = ({action, actionText, image, title, subtitle}) => (
  <View style={styles.emptyStateContainer}>
    <Image
      source={image}
      style={styles.emptyStateImage}
      resizeMode="contain"
    />
    <Text style={styles.emptyStateTitle}>{title}</Text>
    <Text style={styles.emptyStateSubtitle}>{subtitle}</Text>
    {action
      && <TouchableOpacity
        onPress={action}
        style={styles.emptyStateButton}
      >
        <Text style={styles.emptyStateButtonText}>
          {actionText}
        </Text>
      </TouchableOpacity>}
  </View>
)

EmptyState.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  image: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

EmptyState.defaultProps = {
  action: null,
  actionText: '',
  subtitle: '',
  title: '',
}

export default EmptyState
