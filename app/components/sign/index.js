import React from 'react'
import {
  AsyncStorage,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import OneSignal from 'react-native-onesignal'

import styles from './styles'
import BackgroundView from '../background-view'
import { ApiSync, apiWrapper } from '../../utils'
import { colors } from '../../constants/style'
import { SIGNIN, SIGNUP } from '../../constants/sign'
import { logo } from '../../images'

import I18n from '../../i18n'

class Sign extends React.Component {
  signIn() {
    const {
      email,
      password,
      resetErrors,
      setError,
    } = this.props

    let errors = false

    resetErrors()
    // TODO: add email check
    if (email.length < 4) {
      errors = true
      setError('email', I18n.t('global_errorInvalid'))
    }
    if (password.length < 8) {
      errors = true
      setError('password', I18n.t('global_error8chars'))
    }
    if (!errors) {
      apiWrapper
        .signIn({
          email,
          password,
        })
        .then(async r => {
          await AsyncStorage.setItem('@QueueUp:AUTH_UID', r.data.email)
          await AsyncStorage.setItem('@QueueUp:AUTH_TOKEN', r.data.accessToken.key)
          apiWrapper
            .createDevice()
            .then(() => OneSignal.syncHashedEmail(r.data.email))
          apiWrapper
            .getLeagueProfile()
            .then(r => {
              if (r.data) {
                Actions.replace(Platform.OS === 'ios' ? 'notifications' : 'home')
                const apiSync = new ApiSync(this.props.dispatch)
                apiSync.initialSync()
              } else {
                Actions.accountCreationIntro()
              }
            })
        })
        .catch(() => setError('global', I18n.t('global_errorCredentials')))
    }
  }

  signUp() {
    const {
      confirmation,
      email,
      password,
      resetErrors,
      setError,
    } = this.props

    let errors = false

    resetErrors()
    // TODO: add email check
    if (email.length < 4) {
      errors = true
      setError('email', I18n.t('global_errorInvalid'))
    }
    if (password.length < 8) {
      errors = true
      setError('password', I18n.t('global_error8chars'))
    }
    if (password !== confirmation) {
      errors = true
      setError('confirmation', I18n.t('global_errorPasswordConfirmation'))
    }
    if (!errors) {
      apiWrapper
        .signUp({
          email,
          password,
        })
        .then(async r => {
          await AsyncStorage.setItem('@QueueUp:AUTH_UID', r.data.email)
          await AsyncStorage.setItem('@QueueUp:AUTH_TOKEN', r.data.accessToken.key)
          Actions.replace('accountCreationIntro')
          apiWrapper.createDevice()
        })
        .catch(({response: { data }}) => {
          Object.keys(data).forEach(key => setError(key, data[key].join(', ')))
        })
    }
  }

  render() {
    const {
      confirmation,
      displaySignin,
      displaySignup,
      email,
      errors,
      password,
      step,
      updateField,
    } = this.props

    return (
      <BackgroundView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}
        >
          <ScrollView
            centerContent
            contentContainerStyle={styles.container}
          >
            <Image source={logo} style={styles.logo} />
            <View style={styles.navigationContainer}>
              <TouchableOpacity onPress={displaySignin} >
                <Text style={step === SIGNIN ? styles.activeNavigation : styles.inactiveNavigation}>
                  {I18n.t('sign_signIn')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={displaySignup} >
                <Text style={step === SIGNUP ? styles.activeNavigation : styles.inactiveNavigation}>
                  {I18n.t('sign_signUp')}
                </Text>
              </TouchableOpacity>
            </View>
            {errors.global &&
              <Text style={styles.inputErrorText}>{errors.global}</Text>
            }
            <TextInput
              ref="email"
              placeholder={I18n.t('sign_email')}
              onChangeText={t => updateField('email', t)}
              value={email}
              style={[
                styles.input,
                errors.email ? styles.inputWithError : {},
              ]}
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.placeholderGrey}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onSubmitEditing={() => this.refs.password.focus()}
              returnKeyType="next"
            />
            {errors.email &&
              <Text style={styles.inputErrorText}>{errors.email}</Text>
            }
            <TextInput
              ref="password"
              placeholder={I18n.t('sign_password')}
              onChangeText={t => updateField('password', t)}
              value={password}
              style={[
                styles.input,
                errors.password ? styles.inputWithError : {},
              ]}
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.placeholderGrey}
              secureTextEntry
              onSubmitEditing={() => step === SIGNIN
                ? this.signIn()
                : this.refs.confirmation.focus()}
              returnKeyType={step === SIGNIN ? 'done' : 'next'}
            />
            {errors.password &&
              <Text style={styles.inputErrorText}>{errors.password}</Text>
            }
            {
              step === SIGNUP && (
                <TextInput
                  ref="confirmation"
                  placeholder={I18n.t('sign_confirmation')}
                  onChangeText={t => updateField('confirmation', t)}
                  value={confirmation}
                  style={[
                    styles.input,
                    errors.confirmation ? styles.inputWithError : {},
                  ]}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={colors.placeholderGrey}
                  secureTextEntry
                  onSubmitEditing={() => this.signUp()}
                  returnKeyType="done"
                />
              )
            }
            {step === SIGNUP && errors.confirmation &&
              <Text style={styles.inputErrorText}>{errors.confirmation}</Text>
            }
            {
              step === SIGNIN
                ? <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
                  <Text style={styles.buttonText}>{I18n.t('sign_signInButton').toUpperCase()}</Text>
                </TouchableOpacity>
                : <TouchableOpacity style={styles.button} onPress={() => this.signUp()}>
                  <Text style={styles.buttonText}>{I18n.t('sign_signUpButton').toUpperCase()}</Text>
                </TouchableOpacity>
            }
          </ScrollView>
        </KeyboardAvoidingView>
      </BackgroundView>
    )
  }
}

Sign.propTypes = {
  confirmation: PropTypes.string,
  dispatch: PropTypes.func,
  displaySignin: PropTypes.func,
  displaySignup: PropTypes.func,
  email: PropTypes.string,
  errors: PropTypes.object,
  password: PropTypes.string,
  resetErrors: PropTypes.func,
  setError: PropTypes.func,
  step: PropTypes.string,
  updateField: PropTypes.func,
}

Sign.defaultProps = {
  confirmation: '',
  dispatch: () => null,
  displaySignin: () => null,
  displaySignup: () => null,
  email: '',
  errors: {},
  password: '',
  resetErrors: () => null,
  setError: () => null,
  step: '',
  updateField: () => null,
}

export default Sign
