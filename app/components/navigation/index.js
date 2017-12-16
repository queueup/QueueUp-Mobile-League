import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import rightArrow from './right-arrow.png'
import rightArrowLight from './right-arrow-light.png'
import styles from './styles'
import I18n from '../../i18n'

const NavigationState = ({ steps, currentStep }) => (
  <View style={styles.navigationState}>
    {steps.map(s =>
      <View
        key={s.index}
        style={[
          styles.navigationPoint,
          s.index === currentStep.index ? styles.activeNavigationPoint : {},
        ]}
      />
    )}
  </View>
)

NavigationState.propTypes = {
  currentStep: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
}

const Navigation = ({
  currentStep,
  steps,
  light,
  onRightPress,
  onLeftPress,
  leftButtonText,
  rightButtonText,
  finalButtonText,
  onFinalRightPress,
}) => light
  ? (
    <View style={styles.lightContainer}>
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        onPress={
          currentStep.index !== steps[steps.length - 1].index
            ? onRightPress
            : onFinalRightPress
        }
      >
        <Text style={[styles.buttonText, styles.rightButtonTextLight]}>
          {currentStep.index !== steps[steps.length - 1].index
            ? rightButtonText.toUpperCase()
            : finalButtonText.toUpperCase()
          }
        </Text>
        <Image source={rightArrowLight} style={styles.rightArrow} />
      </TouchableOpacity>
    </View>
  )
  : (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.leftButton]}
        onPress={onLeftPress}
      >
        <Text style={styles.buttonText}>{currentStep.index !== steps[0].index &&leftButtonText.toUpperCase()}</Text>
      </TouchableOpacity>
      <NavigationState steps={steps} currentStep={currentStep} />
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        onPress={
          currentStep.index !== steps[steps.length - 1].index
            ? onRightPress
            : onFinalRightPress
        }
      >
        <Text style={[styles.buttonText, styles.rightButtonText]}>
          {currentStep.index !== steps[steps.length - 1].index
            ? rightButtonText.toUpperCase()
            : finalButtonText.toUpperCase()
          }
        </Text>
        <Image source={rightArrow} style={styles.rightArrow} />
      </TouchableOpacity>
    </View>
  )

Navigation.defaultProps = {
  finalButtonText: I18n.t('global_done'),
  leftButtonText: I18n.t('global_previous'),
  light: false,
  onFinalRightPress: () => null,
  onLeftPress: () => null,
  onRightPress: () => null,
  rightButtonText: I18n.t('global_next'),
}

Navigation.propTypes = {
  currentStep: PropTypes.object.isRequired,
  finalButtonText: PropTypes.string,
  leftButtonText: PropTypes.string,
  light: PropTypes.bool,
  onFinalRightPress: PropTypes.func,
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func,
  rightButtonText: PropTypes.string,
  steps: PropTypes.array.isRequired,
}

export default Navigation
