import React from 'react'
import {
  Image,
} from 'react-native'
import {
  View as AnimatedView,
} from 'react-native-animatable'
import PropTypes from 'prop-types'
import {
  discord,
  skype,
  teamspeak,
} from '../../../images'
import styles from '../styles'

export const Communication = ({ data }) => (
  <AnimatedView style={styles.communicationContainer} animation="fadeInRight" delay={1000} duration={300}>
    <Image source={discord} style={data.find(c => c.type === 'discord' && c.value) ? styles.communicationImage : styles.communicationImageDisabled} />
    <Image source={skype} style={data.find(c => c.type === 'skype' && c.value) ? styles.communicationImage : styles.communicationImageDisabled} />
    <Image source={teamspeak} style={data.find(c => c.type === 'teamspeak' && c.value) ? styles.communicationImage : styles.communicationImageDisabled} />
  </AnimatedView>
)

Communication.propTypes = {
  data: PropTypes.array,
}

Communication.defaultProps = {
  data: {},
}

