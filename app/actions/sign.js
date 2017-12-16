import {
  SIGN_DISPLAY_SIGNIN,
  SIGN_DISPLAY_SIGNUP,
  SIGN_UPDATE_FIELD,
  SIGN_RESET_ERRORS,
  SIGN_SET_ERROR,
} from '../constants/actions'

export const displaySignin = () => ({
  type: SIGN_DISPLAY_SIGNIN,
})

export const displaySignup = () => ({
  type: SIGN_DISPLAY_SIGNUP,
})

export const updateField = (field, value) => ({
  field,
  type: SIGN_UPDATE_FIELD,
  value,
})

export const resetErrors = () => ({
  type: SIGN_RESET_ERRORS,
})

export const setError = (field, error) => ({
  error,
  field,
  type: SIGN_SET_ERROR,
})
