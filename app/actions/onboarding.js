import {
  ONBOARDING_NEXT_STEP,
  ONBOARDING_PREVIOUS_STEP,
} from '../constants/actions'

export const nextStep = () => ({
  type: ONBOARDING_NEXT_STEP,
})

export const previousStep = () => ({
  type: ONBOARDING_PREVIOUS_STEP,
})
