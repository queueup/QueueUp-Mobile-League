import React from 'react'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import { colors } from '../../constants/style'
import { discord, skype, teamspeak } from '../../images'
import { apiWrapper } from '../../utils'

import I18n from '../../i18n'

const availableCommunications = [
  {
    image: discord,
    key: 'discord',
    placeholder: 'DiscordTag#0000',
  },
  {
    image: skype,
    key: 'skype',
    placeholder: 'Skype Username',
  },
  {
    image: teamspeak,
    key: 'teamspeak',
    placeholder: 'Server address',
  },
]

class GoalsSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props.settings,
    }
  }

  onSubmit() {
    const { updateField } = this.props
    availableCommunications.forEach(c =>
      apiWrapper
        .updateCommunication(c.key, this.state[c.key])
        .then(() => updateField(c.key, this.state[c.key]))
    )
    Actions.pop()
  }

  render() {
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('communicationSettings_title')}
            hideRight
          />
          {
            availableCommunications.map((c, i) => (
              <View key={c.key} style={styles.communicationContainer}>
                <Image source={c.image} style={styles.image} resizeMode="contain"/>
                <TextInput
                  ref={c.key}
                  placeholder={c.placeholder}
                  onChangeText={t => this.setState({[c.key]: t})}
                  value={this.state[c.key]}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={colors.placeholderGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={() => {
                    if (i < availableCommunications.length - 1) {
                      this.refs[availableCommunications[i + 1].key].focus()
                    } else {
                      this.onSubmit()
                    }
                  }}
                  returnKeyType={i < availableCommunications.length - 1 ? 'next' : 'send'}
                />
              </View>
            ))
          }
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => this.onSubmit()}
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
  currentPassword: PropTypes.string,
  newPassword: PropTypes.string,
  newPasswordConfirmation: PropTypes.string,
  settings: PropTypes.object,
  updateField: PropTypes.func,
}

GoalsSettings.defaultProps = {
  currentPassword: '',
  newPassword: '',
  newPasswordConfirmation: '',
  settings: {},
  updateField: () => null,
}

export default GoalsSettings
