import React from 'react'
import {
  AsyncStorage,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import { icons } from '../../images'
import I18n from '../../i18n'
import { apiWrapper } from '../../utils'

const menu = displayUser => [
  {
    title: I18n.t('settings_account'),
    data: [
      {
        icon: 'padlock',
        label: I18n.t('settings_changePassword'),
        onPress: () => Actions.passwordSettings(),
      },
    ],
  },
  {
    title: I18n.t('settings_preferences'),
    data: [
      {
        icon: 'microphone',
        label: I18n.t('settings_communication'),
        onPress: () => Actions.communicationSettings(),
      },
      {
        icon: 'settings',
        label: I18n.t('settings_suggestions'),
        onPress: () => Actions.suggestionsSettings(),
      },
      {
        icon: 'barChart',
        label: I18n.t('settings_ads'),
        onPress: () => Actions.adsSettings(),
      },
    ],
  },
  {
    title: I18n.t('settings_summoner'),
    data: [
      {
        icon: 'champion',
        label: I18n.t('settings_champions'),
        onPress: () => Actions.championsSettings(),
      },
      {
        icon: 'role',
        label: I18n.t('settings_roles'),
        onPress: () => Actions.rolesSettings(),
      },
      {
        icon: 'circularTarget',
        label: I18n.t('settings_goals'),
        onPress: () => Actions.goalsSettings(),
      },
      {
        icon: 'speechBubble',
        label: I18n.t('settings_locales'),
        onPress: () => Actions.localesSettings(),
      },
      {
        icon: 'user',
        label: I18n.t('settings_profile'),
        onPress: () => {
          apiWrapper.getProfilePreview().then(r => {
            displayUser(r.data)
            Actions.userDetails({ own: true })
          })
        },
      },
    ],
  },
  {
    title: I18n.t('settings_other'),
    data: [
      {
        icon: 'star',
        label: I18n.t('settings_credits'),
        onPress: () => Actions.credits(),
      },
      {
        icon: 'logout',
        label: I18n.t('settings_logout'),
        onPress: () => {
          apiWrapper
            .deleteDevice()
            .then(() => {
              AsyncStorage.removeItem('@QueueUp:notificationsSetup')
              AsyncStorage.removeItem('@QueueUp:AUTH_UID')
              AsyncStorage.removeItem('@QueueUp:AUTH_TOKEN')
            })
          Actions.sign()
        },
      },
    ],
  },
]

const ListHeader = ({ title }) => <Text style={styles.listHeader}>{title}</Text>

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

const ListItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.listItem}>
      <View style={styles.listItemData}>
        <Image source={icons[item.icon]} style={styles.listItemImage} resizeMode="contain"/>
        <Text style={styles.listItemText}>{item.label}</Text>
      </View>
      <Image source={icons.rightArrow} style={styles.listItemArrow} resizeMode="contain"/>
    </View>
  </TouchableOpacity>
)

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const Settings = ({ displayUser }) => (
  <BackgroundView>
    <View style={{flex: 1}}>
      <NavigationBar
        centerText={I18n.t('settings_title')}
        hideRight
      />
      <SectionList
        keyExtractor={i => i.label}
        renderItem={({item}) => <ListItem item={item} />}
        renderSectionHeader={({section}) => <ListHeader title={section.title} />}
        sections={menu(displayUser)}
      />
    </View>
  </BackgroundView>
)

Settings.propTypes = {
  displayUser: PropTypes.func,
}

Settings.defaultProps = {
  displayUser: () => null,
}

export default Settings
