import { combineReducers } from 'redux'
import accountCreation from './account-creation'
import chat from './chat'
import matches from './matches'
import onboarding from './onboarding'
import settings from './settings'
import sign from './sign'
import suggestions from './suggestions'
import users from './users'
import ux from './ux'

export const reducer = combineReducers({
  accountCreation,
  chat,
  matches,
  onboarding,
  settings,
  sign,
  suggestions,
  users,
  ux,
})
