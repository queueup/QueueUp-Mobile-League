import {
  ONBOARDING_NEXT_STEP,
  ONBOARDING_PREVIOUS_STEP,
} from '../constants/actions'
import { steps } from '../constants/onboarding'

const initialState = {
  currentStepIndex: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ONBOARDING_NEXT_STEP:
    return {
      ...state,
      currentStepIndex: state.currentStepIndex  < steps.length  ?
        state.currentStepIndex + 1 : state.currentStepIndex,
    }
  case ONBOARDING_PREVIOUS_STEP:
    return {
      ...state,
      currentStepIndex: state.currentStepIndex - 1 > 0 ?
        state.currentStepIndex - 1 : state.currentStepIndex,
    }
  default:
    return state
  }
}
