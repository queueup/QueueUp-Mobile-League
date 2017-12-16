import {
  SUGGESTIONS_ADD_SUGGESTIONS,
  SUGGESTIONS_REMOVE_SUGGESTION,
} from '../constants/actions'

export const addSuggestions = suggestions => ({
  suggestions,
  type: SUGGESTIONS_ADD_SUGGESTIONS,
})

export const removeSuggestion = () => ({
  type: SUGGESTIONS_REMOVE_SUGGESTION,
})
