import React from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  View,
} from 'react-native'
import {
  View as AnimatedView,
} from 'react-native-animatable'
import {
  roles as roleImages,
} from '../../../images'
import styles from '../styles'

export const Roles = ({roles}) => (
  <AnimatedView style={styles.rolesContainer} animation="fadeInRight" delay={400} duration={300}>
    {roles.map(r =>
      <View key={r} style={styles.roleContainer}>
        <Image source={roleImages[r]} style={styles.roleImage} />
        <Text style={styles.roleText}>{r.toUpperCase()}</Text>
      </View>
    )}
  </AnimatedView>
)

Roles.propTypes = {
  roles: PropTypes.array,
}

Roles.defaultProps = {
  roles: [],
}
