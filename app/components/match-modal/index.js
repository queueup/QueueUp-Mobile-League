import React from 'react'
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../i18n'

import { happyLux } from '../../images'

import styles from './styles'

const MatchModal = ({ display, hideMatchModal }) => (
  <Modal
    animationType="fade"
    onRequestClose={hideMatchModal}
    transparent={true}
    visible={display}
    onRequestClose={hideMatchModal}
  >
    <View style={{
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
      flex: 1,
      justifyContent: 'center',
    }}>
      <Image source={happyLux} style={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>{I18n.t('matchModal_title')}</Text>
      <Text style={styles.subtitle}>{I18n.t('matchModal_subtitle')}</Text>
      <TouchableOpacity onPress={hideMatchModal} style={styles.button}>
        <Text style={styles.buttonText}>{I18n.t('matchModal_button')}</Text>
      </TouchableOpacity>
    </View>
  </Modal>
)

MatchModal.propTypes = {
  display: PropTypes.bool,
  hideMatchModal: PropTypes.func,
}

MatchModal.defaultProps = {
  display: false,
  hideMatchModal: () => null,
}

export default MatchModal
