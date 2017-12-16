import {
  SETTINGS_UPDATE_FIELD,
} from '../constants/actions'

const initialState = {
  ads: true,
  editing: false,
  profileId: '',
  selectedChampions: [],
  selectedGoals: [],
  selectedLocales: [],
  selectedRoles: [],
  favoriteQueue: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SETTINGS_UPDATE_FIELD:
    return {
      ...state,
      [action.field]: action.value,
    }
  default:
    return state
  }
}
