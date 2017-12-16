import {
  SETTINGS_TOGGLE_CHAMPION,
  SETTINGS_UPDATE_FIELD,
} from '../constants/actions'

export const toggleChampion = champion => ({
  champion,
  type: SETTINGS_TOGGLE_CHAMPION,
})

export const updateField = (field, value) => ({
  field,
  type: SETTINGS_UPDATE_FIELD,
  value,
})
