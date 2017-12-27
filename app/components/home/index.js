import React from 'react'
import {
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AdMobRewarded } from 'react-native-admob'
import Config from 'react-native-config'
import moment from 'moment'
import PropTypes from 'prop-types'

import AnswerButtons from '../answer-buttons'
import BackgroundView from '../background-view'
import EmptyState from '../empty-state'
import NavigationBar from '../navigation-bar'
import SummonerCard from '../summoner-card'

import I18n from '../../i18n'

import { sleepingPoro } from '../../images'

import { apiWrapper } from '../../utils'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      noMore: false,
    }
  }

  componentDidMount() {
    const {
      updateSetting,
    } = this.props

    AdMobRewarded.setAdUnitID(Config.ADMOB_REWARDED_UNIT_ID)
    AdMobRewarded.requestAd().catch(() => null)
    AdMobRewarded.addEventListener('rewarded', () => {
      updateSetting('answersCount', 0)
      updateSetting('nextSuggestionsDate', moment())
      this.loadSuggestions()
    })
    this.loadSuggestions()
  }

  loadSuggestions() {
    const {
      addSuggestions,
      nextSuggestionsDate,
    } = this.props
    if (nextSuggestionsDate === null || moment().isSameOrAfter(nextSuggestionsDate)) {
      apiWrapper
        .getSuggestions()
        .then(({ data }) => {
          if (data.length === 0) {
            this.setState({ noMore: true })
          }
          addSuggestions(data)
        })
    }
  }

  handleAnswer(answer, callback) {
    const {
      answersCount,
      displayMatchModal,
      removeSuggestion,
      suggestions,
      updateSetting,
    } = this.props

    if (suggestions.length > 0) {
      const request = answer
        ? apiWrapper.acceptSuggestion
        : apiWrapper.declineSuggestion
      request(suggestions[0].leagueProfile.id)
        .then(r => {
          if (r.data.matches) { displayMatchModal() }
        })
        .catch(() => null)
        .then(() => {
          removeSuggestion()
          if (typeof cb === 'function') { callback() }
          const newAnswersCount = answersCount + 1
          updateSetting('answersCount', newAnswersCount)
          if (newAnswersCount >= 20) {
            updateSetting('nextSuggestionsDate', moment().add(1, 'hours'))
          }
        })
    }
  }

  render() {
    const {
      answersCount,
      displayUser,
      favoriteQueue,
      suggestions,
    } = this.props
    const { noMore } = this.state

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
          {suggestions.length > 0 && answersCount < 20
            ? <SummonerCard
              summoner={suggestions[0].leagueProfile}
              communicationData={suggestions[0].communicationData}
              queueType={favoriteQueue.id}
              onAccept={callback => this.handleAnswer(true, callback)}
              onDeny={callback => this.handleAnswer(false, callback)}
              onPress={() => displayUser(suggestions[0])}
            />
            : noMore
              ? <EmptyState
                image={sleepingPoro}
                title={I18n.t('home_emptyTitle')}
                subtitle={I18n.t('home_emptySubtitle')}
              />
              : <EmptyState
                action={() => AdMobRewarded.showAd()}
                actionText={I18n.t('home_emptyAdButton')}
                image={sleepingPoro}
                title={I18n.t('home_emptyAdTitle')}
                subtitle={I18n.t('home_emptyAdSubtitle')}
              />}
          <AnswerButtons
            onAccept={callback => this.handleAnswer(true, callback)}
            onDeny={callback => this.handleAnswer(false, callback)}
          />
        </View>
      </BackgroundView>
    )
  }
}

Home.propTypes = {
  addSuggestions: PropTypes.func,
  answersCount: PropTypes.number,
  displayMatchModal: PropTypes.func,
  displayUser: PropTypes.func,
  favoriteQueue: PropTypes.object,
  nextSuggestionsDate: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  removeSuggestion: PropTypes.func,
  suggestions: PropTypes.array,
  updateSetting: PropTypes.func,
}

Home.defaultProps = {
  addSuggestions: () => null,
  answersCount: 0,
  displayMatchModal: () => null,
  displayUser: () => null,
  favoriteQueue: {},
  nextSuggestionsDate: null,
  removeSuggestion: () => null,
  suggestions: [],
  updateSetting: () => null,
}

export default Home
