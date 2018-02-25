import {
  AsyncStorage,
} from 'react-native'
import {
  Actions,
} from 'react-native-router-flux'

import {
  setMatches,
} from '../actions/matches'
import {
  updateField,
} from '../actions/settings'

import { apiWrapper } from './api-wrapper'

export class ApiSync {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  async initialSync() {
    apiWrapper
      .getLeagueProfile()
      .then(r => {
        if (r.data) {
          const leagueProfile = r.data
          this.dispatch(updateField('selectedChampions', leagueProfile.champions))
          this.dispatch(updateField('selectedGoals', leagueProfile.goals))
          this.dispatch(updateField('selectedLocales', leagueProfile.locales))
          this.dispatch(updateField('selectedRoles', leagueProfile.roles))
          this.dispatch(updateField('profileId', leagueProfile.id))
          this.dispatch(updateField('description', leagueProfile.description))
        } else {
          AsyncStorage.removeItem('@QueueUp:AUTH_UID')
          AsyncStorage.removeItem('@QueueUp:AUTH_TOKEN')
          Actions.replace('sign')
        }
      })
    apiWrapper
      .getMatches()
      .then(r => this.dispatch(setMatches(r.data)))
    apiWrapper
      .getCommunication()
      .then(r => r.data.forEach(c => this.dispatch(updateField(c.type, c.value))))
    apiWrapper
      .deleteNotifications()
  }
}
