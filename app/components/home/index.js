import React from 'react'
import {
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import AnswerButtons from '../answer-buttons'
import BackgroundView from '../background-view'
import EmptyState from '../empty-state'
import NavigationBar from '../navigation-bar'
import SummonerCard from '../summoner-card'

import I18n from '../../i18n'

import { sleepingPoro } from '../../images'

import { apiWrapper } from '../../utils'

const Home = ({ onAccept, onDeny, suggestions, favoriteQueue, displayUser, displayMatchModal }) => {
  const accept = cb => suggestions.length > 0
    && apiWrapper
      .acceptSuggestion(suggestions[0].leagueProfile.id)
      .then(r => {
        onAccept()
        if (r.data.matches) { displayMatchModal() }
        if (typeof cb === 'function') { cb() }
      })
      .catch(() => {
        onAccept()
        if (typeof cb === 'function') { cb() }
      })
  const deny = cb => suggestions.length > 0
    && apiWrapper
      .declineSuggestion(suggestions[0].leagueProfile.id)
      .then(() => {
        onDeny()
        if (typeof cb === 'function') { cb() }
      })
      .catch(() => {
        onDeny()
        if (typeof cb === 'function') { cb() }
      })

  return (
    <BackgroundView>
      <View style={{flex: 1}}>
        <NavigationBar
          leftIcon="settings"
          leftAction={() => Actions.settings()}
          rightIcon="pushPin"
          rightAction={() => Actions.matches()}
          hideCenter
        />
        {suggestions.length > 0
          ? <SummonerCard
            summoner={suggestions[0].leagueProfile}
            communicationData={suggestions[0].communicationData}
            queueType={favoriteQueue.id}
            onAccept={accept}
            onDeny={deny}
            onPress={() => displayUser(suggestions[0])}
          />
          : <EmptyState
            image={sleepingPoro}
            title={I18n.t('home_emptyTitle')}
            subtitle={I18n.t('home_emptySubtitle')}
          />}
        <AnswerButtons onAccept={accept} onDeny={deny} />
      </View>
    </BackgroundView>
  )
}

Home.propTypes = {
  displayMatchModal: PropTypes.func,
  displayUser: PropTypes.func,
  favoriteQueue: PropTypes.object,
  onAccept: PropTypes.func,
  onDeny: PropTypes.func,
  suggestions: PropTypes.array,
}

Home.defaultProps = {
  displayMatchModal: () => null,
  displayUser: () => null,
  favoriteQueue: {},
  onAccept: () => null,
  onDeny: () => null,
  suggestions: [],
}

export default Home
