import React from 'react'
import {
  Alert,
  Animated,
  Switch,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'

import { dead, lover } from '../../images'
import I18n from '../../i18n'

class AdsSettings extends React.Component {
  constructor(props) {
    super(props)

    this.growing = false
    this.imageScale = new Animated.Value(0.8)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    if (this.growing) {
      Animated.spring(this.imageScale, {toValue: 0.8}).start()
    } else {
      Animated.spring(this.imageScale, {toValue: 1}).start()
    }
    this.growing = !this.growing
    setTimeout(() => this.animate(), 500)
  }

  render() {
    const { ads, setAds } = this.props
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('adsSettings_title')}
            centerTextSubtitle={I18n.t('adsSettings_subtitle')}
            extended
            hideRight
          />
          <View style={styles.container}>
            <Animated.Image source={ads ? lover : dead} style={{transform: [{scale: ads ? this.imageScale : 1}]}} />
            <Text style={styles.paragraph}>
              {I18n.t('adsSettings_description')}
            </Text>
            <Switch
              onValueChange={value => {
                if (value) {
                  setAds(value)
                } else {
                  Alert.alert(
                    I18n.t('adsSettings_alertTitle'),
                    I18n.t('adsSettings_alertContent'),
                    [
                      {text: I18n.t('global_cancel'), style: 'cancel'},
                      {text: I18n.t('global_yes'), onPress: () => setAds(value), style: 'destructive'},
                    ],
                    { cancelable: true }
                  )
                }
              }}
              value={ads}
            />
          </View>
        </View>
      </BackgroundView>
    )
  }
}

AdsSettings.propTypes = {
  ads: PropTypes.bool,
  setAds: PropTypes.func,
}

AdsSettings.defaultProps = {
  ads: true,
  setAds: () => null,
}

export default AdsSettings
