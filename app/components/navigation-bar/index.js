import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { icons } from '../../images'
import styles from './styles.js'

const NavigationBar = ({
  hideLeft,
  leftIcon,
  leftAction,
  hideRight,
  rightIcon,
  rightAction,
  hideCenter,
  centerText,
  centerTextSubtitle,
  extended,
}) => (
  <View style={extended ? styles.extendedHeaderNavigation : styles.headerNavigation}>
    {
      hideLeft
        ? <View style={styles.headerNavigationButton} />
        : <TouchableOpacity style={styles.headerNavigationButton} onPress={leftAction}>
          <Image source={icons[leftIcon]} style={styles.headerNavigationImage} resizeMode="contain" />
        </TouchableOpacity>
    }
    {
      hideCenter
        ? <View style={{flex: 1}} />
        : <View style={styles.centerTextContainer} >
          <Text style={styles.headerNavigationText} numberOfLines={1}>{centerText}</Text>
          {centerTextSubtitle.length > 0
            && <Text style={styles.headerNavigationTextSubtitle}>{centerTextSubtitle}</Text>}
        </View>
    }
    {
      hideRight
        ? <View style={styles.headerNavigationButton} />
        : <TouchableOpacity style={styles.headerNavigationButton} onPress={rightAction}>
          <Image source={icons[rightIcon]} style={styles.headerNavigationImage} resizeMode="contain" />
        </TouchableOpacity>
    }
  </View>
)

NavigationBar.propTypes = {
  centerAction: PropTypes.func,
  centerText: PropTypes.string,
  centerTextSubtitle: PropTypes.string,
  extended: PropTypes.bool,
  hideCenter: PropTypes.bool,
  hideLeft: PropTypes.bool,
  hideRight: PropTypes.bool,
  leftAction: PropTypes.func,
  leftIcon: PropTypes.string,
  rightAction: PropTypes.func,
  rightIcon: PropTypes.string,
}

NavigationBar.defaultProps = {
  centerAction: () => null,
  centerText: '',
  centerTextSubtitle: '',
  extended: false,
  hideCenter: false,
  hideLeft: false,
  hideRight: false,
  leftAction: () => Actions.pop(),
  leftIcon: 'previous',
  rightAction: () => null,
  rightIcon: '',
}

export default NavigationBar
