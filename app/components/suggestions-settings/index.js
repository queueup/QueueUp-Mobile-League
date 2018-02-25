import React from 'react'
import {
  AsyncStorage,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Slider from '@realgeeks/react-native-multi-slider'
import PropTypes from 'prop-types'
import styles from './styles'
import goals from '../../constants/goals'
import queues from '../../constants/queues'
import roles from '../../constants/roles'
import tiers from '../../constants/tiers'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'

import { colors } from '../../constants/style'
import { leagues } from '../../images'

import I18n from '../../i18n'

const SuggestionsSettings = ({
  favoriteQueue,
  goalsFilter,
  rolesFilter,
  tierFilter,
  updateField,
}) => (
  <BackgroundView>
    <View style={{flex: 1}}>
      <NavigationBar
        centerText={I18n.t('suggestionsSettings_title')}
        centerTextSubtitle={I18n.t('suggestionsSettings_subtitle')}
        extended
        hideRight
      />
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <View style={styles.rolesContainer}>
            {tiers.map(tier => <Image key={tier} source={leagues[tier].i ? leagues[tier].i : leagues[tier]} style={styles.tierImage} />)}
          </View>
          <Slider
            containerStyle={styles.sliderContainer}
            max={tiers.length - 2}
            selectedStyle={{backgroundColor: colors.blue}}
            unselectedStyle={{backgroundColor: colors.lightGrey}}
            values={tierFilter}
          />
        </View>
        <View style={styles.rolesContainer}>
          {roles.map(role => {
            const exists = rolesFilter.find(r => r == role.id)
            return (
              <TouchableOpacity
                key={`${role.id}_${exists ? 'active' : 'inactive'}`}
                onPress={() => exists
                  ? updateField('rolesFilter', rolesFilter.filter(r => r !== role.id))
                  : updateField('rolesFilter', [...rolesFilter, role.id])
                }
                style={[exists ? {opacity: 1} : {opacity: 0.7}, styles.roleImageContainer]}
              >
                <Image
                  source={role.image}
                  style={styles.roleImage}
                />
              </TouchableOpacity>
            )})}
        </View>
        <View style={styles.queuesContainer}>
          {queues.map(q => (
            <TouchableOpacity
              onPress={() => {
                updateField('favoriteQueue', q)
                AsyncStorage.setItem('@QueueUp:favoriteQueue', q.id)
              }}
            >
              <Text
                key={q.id}
                style={styles.queue}
              >
                {q.label + (favoriteQueue.id === q.id)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  </BackgroundView>
)

SuggestionsSettings.propTypes = {
  favoriteQueue: PropTypes.object,
  updateField: PropTypes.func,
}

SuggestionsSettings.defaultProps = {
  favoriteQueue: {},
  updateField: () => null,
}

export default SuggestionsSettings
