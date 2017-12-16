import React from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Toast from 'react-native-easy-toast'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import { apiWrapper } from '../../utils'
import { colors } from '../../constants/style'
import I18n from '../../i18n'

class GoalsSettings extends React.Component {
  onSubmit() {
    const { currentPassword, newPassword, newPasswordConfirmation } = this.props
    if (newPasswordConfirmation === newPassword) {
      apiWrapper
        .updatePassword({
          currentPassword,
          newPassword,
        })
        .then(() => Actions.pop())
        .catch(() => this.refs.toast.show('Bad credentials'))
    }
  }

  render() {
    const { currentPassword, newPassword, newPasswordConfirmation, updateField } = this.props
    return (
      <BackgroundView>
        <Toast
          ref="toast"
          style={styles.toast}
          textStyle={styles.toastText}
        />
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('passwordSettings_title')}
            hideRight
          />
          <TextInput
            ref="currentPassword"
            placeholder={I18n.t('passwordSettings_currentPassword')}
            onChangeText={t => updateField('currentPassword', t)}
            value={currentPassword}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.placeholderGrey}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.refs.newPassword.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            ref="newPassword"
            placeholder={I18n.t('passwordSettings_newPassword')}
            onChangeText={t => updateField('newPassword', t)}
            value={newPassword}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.placeholderGrey}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.refs.newPasswordConfirmation.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            ref="newPasswordConfirmation"
            placeholder={I18n.t('passwordSettings_newPasswordConfirmation')}
            onChangeText={t => updateField('newPasswordConfirmation', t)}
            value={newPasswordConfirmation}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.placeholderGrey}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.onSubmit()}
            returnKeyType="done"
            secureTextEntry
          />
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => this.onSubmit()}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>{I18n.t('global_save')}</Text>
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
  updateField: PropTypes.func,
}

GoalsSettings.defaultProps = {
  currentPassword: '',
  newPassword: '',
  newPasswordConfirmation: '',
  updateField: () => null,
}

export default GoalsSettings
