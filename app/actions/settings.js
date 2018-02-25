import { AsyncStorage } from 'react-native'
import moment from 'moment'
import {
  SETTINGS_UPDATE_FIELD,
} from '../constants/actions'

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
