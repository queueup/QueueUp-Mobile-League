import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import GoalsPicker from '../goals-picker'

import I18n from '../../i18n'

import { apiWrapper } from '../../utils'

class GoalsSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: props.selectedGoals,
    }
  }
  render() {
    const {
      updateField,
    } = this.props

    const {
      goals,
    } = this.state

    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('goalSettings_title')}
            centerTextSubtitle={I18n.t('goalSettings_subtitle')}
            extended
            hideRight
          />
          <GoalsPicker
            selectedGoals={goals}
            onChange={goals => this.setState({goals})}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                apiWrapper
                  .updateLeagueProfile({goals})
                  .then(() => updateField(goals))
                Actions.pop()
              }}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>{I18n.t('global_save').toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    )
  }
}

GoalsSettings.propTypes = {
  selectedGoals: PropTypes.array,
  updateField: PropTypes.func,
}

GoalsSettings.defaultProps = {
  selectedGoals: [],
  updateField: () => null,
}

export default GoalsSettings
