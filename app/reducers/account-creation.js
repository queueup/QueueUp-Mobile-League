import {
  CREATION_RESET_ERRORS,
  CREATION_SET_ERROR,
  CREATION_NEXT_STEP,
  CREATION_PREVIOUS_STEP,
  CREATION_UPDATE_FIELD,
} from '../constants/actions'
import { steps } from '../constants/account-creation'

const initialState = {
  currentStepIndex: 1,
  errors: {},
  goals: [],
  profileId: '',
  region: '',
  roles: [],
  summonerName: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
  case CREATION_NEXT_STEP:
    return {
      ...state,
      currentStepIndex: state.currentStepIndex  < steps.length  ?
        state.currentStepIndex + 1 : state.currentStepIndex,
    }
  case CREATION_PREVIOUS_STEP:
    return {
      ...state,
      currentStepIndex: state.currentStepIndex - 1 > 0 ?
        state.currentStepIndex - 1 : state.currentStepIndex,
    }
  case CREATION_UPDATE_FIELD:
    return {
      ...state,
      [action.field]: action.value,
    }
  case CREATION_RESET_ERRORS:
    return {
      ...state,
      errors: {},
    }
  case CREATION_SET_ERROR:
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
