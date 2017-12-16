import React from 'react'
import {
  Image,
  Platform,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import BackgroundView from '../background-view'
import Navigation from '../navigation'

import { ApiSync } from '../../utils'

const AccountCreationForm = ({
  currentStep,
  errors,
  goals,
  nextStep,
  previousStep,
  profileId,
  region,
  regions,
  resetErrors,
  roles,
  setError,
  steps,
  summonerName,
  updateField,
  dispatch,
}) => (
  <BackgroundView>
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <Image source={currentStep.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>
        {currentStep.title}
      </Text>
      <Text style={styles.description}>
        {currentStep.description}
      </Text>
      {errors.global && <Text style={styles.inputErrorText}>{errors.global}</Text>}
      {currentStep.component({
        errors,
        goals,
        onChange: updateField,
        region,
        regions,
        roles,
        summonerName,
        updateField,
      })}
      <Navigation
        light
        steps={steps}
        currentStep={currentStep}
        onRightPress={() => {
          currentStep.onSubmit({
            dispatch,
            goals,
            nextStep,
            profileId,
            region,
            regions,
            resetErrors,
            roles,
            setError,
            summonerName,
            updateField,
          })
        }}
        finalButtonText="Let's go !"
        onFinalRightPress={() => {
          currentStep.onSubmit({
            dispatch,
            goals,
            nextStep,
            profileId,
            region,
            regions,
            resetErrors,
            roles,
            setError,
            summonerName,
            updateField,
          })
          const apiSync = new ApiSync(dispatch)
          apiSync.initialSync()
          Actions.replace(Platform.OS === 'ios' ? 'notifications' : 'home')
        }}
        onLeftPress={previousStep}
      />
    </KeyboardAwareScrollView>
  </BackgroundView>
)

AccountCreationForm.propTypes = {
  currentStep: PropTypes.object,
  dispatch: PropTypes.func,
  errors: PropTypes.object,
  goals: PropTypes.array,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  profileId: PropTypes.string,
  region: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  regions: PropTypes.array,
  resetErrors: PropTypes.func,
  roles: PropTypes.array,
  setError: PropTypes.func,
  steps: PropTypes.array,
  summonerName: PropTypes.string,
  updateField: PropTypes.func,
}

AccountCreationForm.defaultProps = {
  currentStep: {},
  dispatch: () => null,
  errors: {},
  goals: [],
  nextStep: () => null,
  previousStep: () => null,
  profileId: '',
  region: '',
  regions: [],
  resetErrors: () => null,
  roles: [],
  setError: () => null,
  steps: [],
  summonerName: '',
  updateField: () => null,
}

export default AccountCreationForm
