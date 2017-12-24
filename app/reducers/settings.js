import {
  SETTINGS_UPDATE_FIELD,
} from '../constants/actions'

const initialState = {
  ads: true,
  answersCount: 0,
  description: '',
  editing: false,
  favoriteQueue: {},
  nextSuggestionsDate: null,
  profileId: '',
  selectedChampions: [],
  selectedGoals: [],
  selectedLocales: [],
  selectedRoles: [],
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
