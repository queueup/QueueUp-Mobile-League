import React from 'react'
import {
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import styles from './styles'
import queues from '../../constants/queues'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'

import I18n from '../../i18n'

const SuggestionsSettings = ({ favoriteQueue, setFavoriteQueue }) => (
  <BackgroundView>
    <View style={{flex: 1}}>
      <NavigationBar
        centerText={I18n.t('suggestionsSettings_title')}
        centerTextSubtitle={I18n.t('suggestionsSettings_subtitle')}
        extended
        hideRight
      />
      {queues.map(q => (
        <TouchableOpacity
          key={`${q.id}_${favoriteQueue.id === q.id ? 'active' : 'inactive'}`}
          onPress={() => {
            setFavoriteQueue(q)
            AsyncStorage.setItem('@QueueUp:favoriteQueue', q.id)
            Actions.pop()
          }}
          style={favoriteQueue.id === q.id
            ? styles.activeQueueButton
            : styles.queueButton}
        >
          <Text style={styles.queueButtonText}>{q.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </BackgroundView>
)

SuggestionsSettings.propTypes = {
  favoriteQueue: PropTypes.object,
  setFavoriteQueue: PropTypes.func,
}

SuggestionsSettings.defaultProps = {
  favoriteQueue: {},
  setFavoriteQueue: () => null,
}

export default SuggestionsSettings
