import {
  MATCHES_SET_MATCHES,
} from '../constants/actions'

export default (state = [], action) => {
  switch (action.type) {
  case MATCHES_SET_MATCHES:
    return [
      ...action.matches,
    ]
  default:
    return state
  }
}
