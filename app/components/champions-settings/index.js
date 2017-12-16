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
import constantChampions from '../../constants/champions'

import I18n from '../../i18n'

import { apiWrapper } from '../../utils'

const groupArray = (arr, groupOf) => {
  const groups = []
  let size = 0
  let group = []
  arr.forEach((item, index, items) => {
    if (size >= groupOf) {
      groups.push(group)
      group = []
      size = 0
    }
    group.push(item)
    size++
    if (index === items.length - 1) {
      groups.push(group)
    }
  })
  return groups
}

const orderedChampions = Object.keys(constantChampions)
  .map(c => constantChampions[c])
  .sort((a, b) => {
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
  })

class ChampionsSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      champions: props.selectedChampions,
    }
  }

  toggleChampion(champion) {
    const { champions } = this.state
    this.setState({
      champions: champions.includes(champion)
        ? update(champions, {
          $splice: [[
            champions.indexOf(champion), 1,
          ]],
        })
        : (champions.length > 4
          ? (() => {
            this.refs.toast.show(I18n.t('championsSettings_toast'))
            return champions
          })()
          : update(champions, {$push: [ champion ]})),
    })
  }

  render() {
    const { updateField } = this.props
    const { champions } = this.state
    return (
      <BackgroundView>
        <Toast
          ref="toast"
          style={styles.toast}
          textStyle={styles.toastText}
        />
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('championsSettings_title')}
            centerTextSubtitle={I18n.t('championsSettings_subtitle')}
            extended
            hideRight
          />
          <ScrollView style={styles.championsContainer}>
            {groupArray(orderedChampions, 5).map((champs, i) => {
              const left = 5 - champs.length
              const missing = []
              for (let i = 0; i < left; i++) {
                missing.push({})
              }
              return (
                <View style={styles.championsRow} key={i}>
                  {champs.map(c => (
                    <TouchableOpacity
                      key={`${c.id}_${champions.includes(c.id) ? 'active' : 'inactive'}`}
                      style={champions.includes(c.id) ? {opacity: 1} : {opacity: 0.3}}
                      onPress={() => this.toggleChampion(c.id)}
                    >
                      <Image source={c.image} style={styles.championsImage} resizeMode="contain"/>
                    </TouchableOpacity>
                  ))}
                  {missing.map((a, i) => <TouchableOpacity key={i} style={styles.championsImage} />)}
                </View>
              )
            })}
          </ScrollView>
          <View style={styles.footer}>
            <View style={{flex: 1}} />
            <TouchableOpacity
              onPress={() => {
                apiWrapper
                  .updateLeagueProfile({champions})
                  .then(() => updateField(champions))
                Actions.pop()
              }}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>{I18n.t('global_save')}</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <Text
                style={(() =>  {
                  const style = [styles.championsLength]
                  if (champions.length === 5) {
                    style.push(styles.championsFull)
                  } else if (champions.length > 2) {
                    style.push(styles.championsWarning)
                  }
                  return style
                })()}
              >
                {`${champions.length}/5`}
              </Text>
            </View>
          </View>
        </View>
      </BackgroundView>
    )
  }
}

ChampionsSettings.propTypes = {
  selectedChampions: PropTypes.array,
  toggleChampion: PropTypes.func,
  updateField: PropTypes.func,
}

ChampionsSettings.defaultProps = {
  selectedChampions: [],
  toggleChampion: () => null,
  updateField: () => null,
}

export default ChampionsSettings
