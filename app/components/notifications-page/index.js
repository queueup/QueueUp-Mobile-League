import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import {
  Actions,
} from 'react-native-router-flux'
import OneSignal from 'react-native-onesignal'
import { lightnings } from '../../images'
import SimplePage from '../simple-page'

import I18n from '../../i18n'

class NotificationsPage extends React.Component {
  componentWillMount() {
    OneSignal.checkPermissions((permissions) => {
      if (permissions.alert && permissions.badge && permissions.sound) {
        AsyncStorage.setItem('@QueueUp:notificationsSetup', JSON.stringify(true))
        Actions.replace('home')
      }
    })
  }

  onPress() {
    OneSignal.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
    })
    AsyncStorage.setItem('@QueueUp:notificationsSetup', JSON.stringify(true))
    Actions.replace('home')
  }

  render() {
    return (
      <SimplePage
        image={lightnings}
        title={I18n.t('notifications_title')}
        description={I18n.t('notifications_description')}
        buttonAction={() => this.onPress()}
        buttonText={I18n.t('notifications_button')}
      />
    )
  }
}

NotificationsPage.propTypes = {}

NotificationsPage.defaultProps = {}

export default NotificationsPage
