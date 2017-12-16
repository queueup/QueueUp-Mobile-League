import {
  CREATION_SET_ERROR,
  CREATION_RESET_ERRORS,
  CREATION_NEXT_STEP,
  CREATION_PREVIOUS_STEP,
  CREATION_UPDATE_FIELD,
} from '../constants/actions'

export const nextStep = () => ({
  type: CREATION_NEXT_STEP,
})

export const previousStep = () => ({
  type: CREATION_PREVIOUS_STEP,
})

export const updateField = (field, value) => ({
  field,
  type: CREATION_UPDATE_FIELD,
  value,
})

export const setError = (field, error) => ({
  error,
  field,
  type: CREATION_SET_ERROR,
})

export const resetErrors = () => ({
  type: CREATION_RESET_ERRORS,
})
