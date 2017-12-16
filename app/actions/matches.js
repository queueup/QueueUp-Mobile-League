import {
  MATCHES_SET_MATCHES,
} from '../constants/actions'

export const setMatches = matches => ({
  matches,
  type: MATCHES_SET_MATCHES,
})
