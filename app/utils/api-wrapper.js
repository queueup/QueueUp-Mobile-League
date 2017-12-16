import axios from 'axios'
import {
  AsyncStorage,
} from 'react-native'
import Config from 'react-native-config'
import { decamelizeKeys } from 'humps'

const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: 5000,
})

instance.interceptors.request.use(async config => {
  config.headers.AUTH_UID = await AsyncStorage.getItem('@QueueUp:AUTH_UID')
  config.headers.AUTH_TOKEN = await AsyncStorage.getItem('@QueueUp:AUTH_TOKEN')
  config.data = decamelizeKeys(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

export const apiWrapper = {
  signIn: params => instance.post('user/sign_in', params),
  signUp: params => instance.post('user/sign_up', params),
  updatePassword: params => instance.patch('user/update_password', params),
  validateToken: () => instance.get('user/validate_token'),

  createDevice: () => instance.post('devices', {
    pushToken: global.oneSignalData.pushToken,
    userToken: global.oneSignalData.userId,
  }),
  deleteDevice: () => instance.delete('devices', {
    pushToken: global.oneSignalData.pushToken,
    userToken: global.oneSignalData.userId,
  }),

  getCommunication: () => instance.get('communication_data'),
  updateCommunication: (type, value) => instance.patch(`communication_data/${type}`, { value }),

  getLeagueProfile: () => instance.get('league_profiles'),
  getProfilePreview: () => instance.get('league_profiles/1'),
  createLeagueProfile: params => instance.post('league_profiles', params),
  updateLeagueProfile: params => instance.patch('league_profiles', params),
  updateLeagueRankedData: () => instance.patch('league_profiles/ranked_data'),

  getMatches: () => instance.get('league_matches'),

  getSuggestions: () => instance.get('league_suggestions'),
  acceptSuggestion: id => instance.patch(`league_suggestions/${id}/accept`),
  declineSuggestion: id => instance.patch(`league_suggestions/${id}/decline`),

  createMessage: params => instance.post('league_messages', params),
  getMessages: convId => instance.get(`league_messages/${convId}`),
}
