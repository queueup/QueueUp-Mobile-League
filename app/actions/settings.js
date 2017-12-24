import { AsyncStorage } from 'react-native'
import moment from 'moment'
import {
  SETTINGS_TOGGLE_CHAMPION,
  SETTINGS_UPDATE_FIELD,
} from '../constants/actions'

export const toggleChampion = champion => ({
  champion,
  type: SETTINGS_TOGGLE_CHAMPION,
})

export const updateField = (field, value) => {
  if (moment.isMoment(value)) {
    value = moment(value).toISOString()
  }
  AsyncStorage.setItem(`@QueueUp:${field}`, JSON.stringify(value))
  return ({
    field,
    type: SETTINGS_UPDATE_FIELD,
    value,
  })
}
