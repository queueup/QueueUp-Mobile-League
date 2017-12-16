import {
  UX_DISPLAY_MATCH_MODAL,
  UX_HIDE_MATCH_MODAL,
} from '../constants/actions'

export const displayMatchModal = () => ({
  type: UX_DISPLAY_MATCH_MODAL,
})

export const hideMatchModal = () => ({
  type: UX_HIDE_MATCH_MODAL,
})
