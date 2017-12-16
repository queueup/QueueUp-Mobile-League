import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { Sentry } from 'react-native-sentry'
import Config from 'react-native-config'

import { configureStore } from './store'

import MatchModal from './containers/match-modal'
import Scenes from './scenes'

if (!__DEV__) {
  Sentry.config(Config.SENTRY_URL).install()
}

const App = () => (
  <Provider store={configureStore()}>
    <View style={{flex: 1}}>
      <MatchModal />
      <Scenes />
    </View>
  </Provider>
)

export default App
