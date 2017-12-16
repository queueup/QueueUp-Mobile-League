import {
  UX_DISPLAY_MATCH_MODAL,
  UX_HIDE_MATCH_MODAL,
} from '../constants/actions'

const initialState = {
  matchModal: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case UX_DISPLAY_MATCH_MODAL:
    return {
      ...state,
      matchModal: true,
    }
  case UX_HIDE_MATCH_MODAL:
    return {
      ...state,
      matchModal: false,
    }
  default:
    return state
  }
}
