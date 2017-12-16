import {
  SUGGESTIONS_ADD_SUGGESTIONS,
  SUGGESTIONS_REMOVE_SUGGESTION,
} from '../constants/actions'

export default (state = [], action) => {
  switch (action.type) {
  case SUGGESTIONS_ADD_SUGGESTIONS:
    return [
      ...state,
      ...action.suggestions,
    ]
  case SUGGESTIONS_REMOVE_SUGGESTION:
    return state.filter((s, i) => i !== 0)
  default:
    return state
  }
}
