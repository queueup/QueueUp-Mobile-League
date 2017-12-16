import {
  USER_DISPLAY_USER,
} from '../constants/actions'

export const displayUser = user => ({
  type: USER_DISPLAY_USER,
  user,
})
