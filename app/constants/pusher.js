import Pusher from 'pusher-js/react-native'
import Config from 'react-native-config'

export default new Pusher(Config.PUSHER_KEY, {
  activityTimeout: 60000,
  cluster: Config.PUSHER_CLUSTER,
  encrypted: true,
})
