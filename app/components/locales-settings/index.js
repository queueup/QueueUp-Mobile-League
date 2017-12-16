import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Toast from 'react-native-easy-toast'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import { languages } from '../../images'

import I18n from '../../i18n'

import { apiWrapper, groupArray } from '../../utils'


class LocalesSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locales: props.selectedLocales,
    }
  }

  toggleLocale(locale) {
    const { locales } = this.state
    this.setState({
      locales: locales.includes(locale)
        ? update(locales, {
          $splice: [[
            locales.indexOf(locale), 1,
          ]],
        })
        : update(locales, {$push: [ locale ]}),
    })
  }

  render() {
    const { updateField } = this.props
    const { locales } = this.state
    return (
      <BackgroundView>
        <Toast
          ref="toast"
          style={styles.toast}
          textStyle={styles.toastText}
        />
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('localesSettings_title')}
            centerTextSubtitle={I18n.t('localesSettings_subtitle')}
            extended
            hideRight
          />
          <ScrollView style={styles.localesContainer}>
            {groupArray(Object.keys(languages), 5).map((localesRow, i) => {
              const left = 5 - localesRow.length
              const missing = []
              for (let i = 0; i < left; i++) {
                missing.push({})
              }
              return (
                <View style={styles.localesRow} key={i}>
                  {localesRow.map(locale => (
                    <TouchableOpacity
                      key={`${locale}_${locales.includes(locale) ? 'active' : 'inactive'}`}
                      style={locales.includes(locale) ? {opacity: 1} : {opacity: 0.3}}
                      onPress={() => this.toggleLocale(locale)}
                    >
                      <Image source={languages[locale]} style={styles.localesImage} resizeMode="contain"/>
                    </TouchableOpacity>
                  ))}
                  {missing.map((a, i) => <TouchableOpacity key={i} style={styles.localesImage} />)}
                </View>
              )
            })}
          </ScrollView>
          <View style={styles.footer}>
            <View style={{flex: 1}} />
            <TouchableOpacity
              onPress={() => {
                apiWrapper
                  .updateLeagueProfile({ locales })
                  .then(() => updateField(locales))
                Actions.pop()
              }}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>{I18n.t('global_save')}</Text>
            </TouchableOpacity>
            <View style={{flex: 1}} />
          </View>
        </View>
      </BackgroundView>
    )
  }
}

LocalesSettings.propTypes = {
  selectedLocales: PropTypes.array,
  toggleLocale: PropTypes.func,
  updateField: PropTypes.func,
}

LocalesSettings.defaultProps = {
  selectedLocales: [],
  toggleLocale: () => null,
  updateField: () => null,
}

export default LocalesSettings
