import React from 'react'
import PropTypes from 'prop-types'
import {
  AsyncStorage,
  Platform,
} from 'react-native'
import { connect } from 'react-redux'
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux'
import OneSignal from 'react-native-onesignal'

import { updateField } from '../actions/settings'

import queues from '../constants/queues'

import { ApiSync, apiWrapper } from '../utils'

import AccountCreationIntro from './account-creation-intro'
import AccountCreationForm from './account-creation-form'
import Chat from './chat'
import Credits from './credits'
import Home from './home'
import Loading from './loading'
import Matches from './matches'
import Notifications from './notifications'
import Offline from './offline'
import Onboarding from './onboarding'
import Sign from './sign'
import UserDetails from './user-details'

import AdsSettings from './ads-settings'
import ChampionsSettings from './champions-settings'
import CommunicationSettings from './communication-settings'
import GoalsSettings from './goals-settings'
import LocalesSettings from './locales-settings'
import PasswordSettings from './password-settings'
import RolesSettings from './roles-settings'
import SuggestionsSettings from './suggestions-settings'
import Settings from './settings'

class Scenes extends React.Component {
  componentWillMount() {
    this.setFavoriteQueue()
    this.getAccessToken()
    OneSignal.addEventListener('ids', os => global.oneSignalData = os)
    OneSignal.inFocusDisplaying(0)
  }

  async getAccessToken() {
    apiWrapper
      .validateToken()
      .then(async () => {
        const apiSync = new ApiSync(this.props.dispatch)
        apiSync.initialSync()
        const hasNotifications = await AsyncStorage.getItem('@QueueUp:notificationsSetup')
        if (hasNotifications && JSON.parse(hasNotifications)) {
          Actions.replace('home')
        } else {
          Actions.replace(Platform.OS === 'ios' ? 'notifications' : 'home')
        }
      })
      .catch(() => Actions.replace('onboarding'))
  }

  async setFavoriteQueue() {
    const queueId = await AsyncStorage.getItem('@QueueUp:favoriteQueue')
    this.props.setFavoriteQueue(queues.find(q => queueId === q.id) || queues[0])
    const ads = await AsyncStorage.getItem('@QueueUp:ads')
    this.props.setAds(ads ? JSON.parse(ads) : true)
  }

  handleBack() {
    const backScenes = [
      'settings',
      'userDetails',
      'championsSettings',
      'goalsSettings',
      'localesSettings',
      'passwordSettings',
      'rolesSettings',
      'suggestionsSettings',
      'adsSettings',
      'matches',
    ]
    if (backScenes.includes(Actions.currentScene)) {
      Actions.pop()
    }
    return true
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="accountCreation" hideNavBar={true}>
            <Scene key="accountCreationIntro" component={AccountCreationIntro}  />
            <Scene key="accountCreationForm" component={AccountCreationForm} />
          </Scene>
          <Scene key="chat" component={Chat} />
          <Scene key="credits" component={Credits} />
          <Scene key="home" component={Home} />
          <Scene key="loading" component={Loading} initial />
          <Scene key="matches" component={Matches} />
          <Scene key="notifications" component={Notifications} />
          <Scene key="offline" component={Offline} />
          <Scene key="onboarding" component={Onboarding} />
          <Scene key="sign" component={Sign} />
          <Scene key="userDetails" component={UserDetails} />

          <Scene key="settings" component={Settings} />
          <Scene key="adsSettings" component={AdsSettings} />
          <Scene key="championsSettings" component={ChampionsSettings} />
          <Scene key="communicationSettings" component={CommunicationSettings} />
          <Scene key="goalsSettings" component={GoalsSettings} />
          <Scene key="localesSettings" component={LocalesSettings} />
          <Scene key="passwordSettings" component={PasswordSettings} />
          <Scene key="rolesSettings" component={RolesSettings} />
          <Scene key="suggestionsSettings" component={SuggestionsSettings} />
        </Scene>
      </Router>
    )
  }
}

Scenes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setAds: PropTypes.func.isRequired,
  setFavoriteQueue: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  setAds: q => dispatch(updateField('ads', q)),
  setFavoriteQueue: q => dispatch(updateField('favoriteQueue', q)),
})

export default connect(null, mapDispatchToProps)(Scenes)
