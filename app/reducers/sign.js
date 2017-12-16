import {
  SIGN_RESET_ERRORS,
  SIGN_SET_ERROR,
  SIGN_DISPLAY_SIGNIN,
  SIGN_DISPLAY_SIGNUP,
  SIGN_UPDATE_FIELD,
} from '../constants/actions'
import {
  SIGNIN,
  SIGNUP,
} from '../constants/sign'

const initialState = {
  step: 'sign-in',
  email: '',
  password: '',
  confirmation: '',
  errors: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SIGN_DISPLAY_SIGNIN:
    return {
      ...state,
      step: SIGNIN,
      errors: {},
    }
  case SIGN_DISPLAY_SIGNUP:
    return {
      ...state,
      step: SIGNUP,
      errors: {},
    }
  case SIGN_UPDATE_FIELD:
    return {
      ...state,
      [action.field]: action.value,
    }
  case SIGN_RESET_ERRORS:
    return {
      ...state,
      errors: {},
    }
  case SIGN_SET_ERROR:
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.field]: action.error,
      },
    }
  default:
    return state
  }
}
