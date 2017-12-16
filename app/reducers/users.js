import {
  USER_DISPLAY_USER,
} from '../constants/actions'

const initialState = {
  matches: [],
  suggestions: [],
  selectedUser: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_DISPLAY_USER:
    return {
      ...state,
      selectedUser: action.user,
    }
  default:
    return state
  }
}
