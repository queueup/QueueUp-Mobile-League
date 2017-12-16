import React from 'react'
import {
  Animated,
  PanResponder,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import BackgroundView from '../background-view'
import Navigation from '../navigation'

import I18n from '../../i18n'

class Onboarding extends React.Component {
  constructor(props) {
    super(props)

    this.previousGS = {}

    this.imageOffset = new Animated.Value(0)
    this.imageOpacity = new Animated.Value(0)
    this.imageScale = new Animated.Value(0)
    this.titleOffset = new Animated.Value(0)
    this.titleOpacity = new Animated.Value(0)
    this.titleScale = new Animated.Value(0)
    this.descriptionOffset = new Animated.Value(0)
    this.descriptionOpacity = new Animated.Value(0)
    this.descriptionScale = new Animated.Value(0)
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        if (this.previousDx !== gestureState.dx) {
          this.imageOffset.setValue(gestureState.dx * 0.8)
          this.imageOpacity.setValue(1 - (gestureState.dx / 380))
          this.titleOffset.setValue(gestureState.dx)
          this.titleOpacity.setValue(1 - (gestureState.dx / 380))
          this.descriptionOffset.setValue(gestureState.dx * 1.2)
          this.descriptionOpacity.setValue(1 - (gestureState.dx / 380))
          this.previousDx = gestureState.dx
        }
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        const { steps, currentStep, nextStep, previousStep } = this.props
        if (gestureState.dx < -100) {
          if (currentStep.index !== steps[steps.length - 1].index) {
            nextStep()
          } else {
            Actions.sign()
          }
        } else if (gestureState.dx > 100  && currentStep.index !== steps[0].index) {
          previousStep()
        } else {
          Animated.spring(this.imageOffset, {toValue: 0}).start()
          Animated.spring(this.imageOpacity, {toValue: 1}).start()
          Animated.spring(this.titleOffset, {toValue: 0}).start()
          Animated.spring(this.titleOpacity, {toValue: 1}).start()
          Animated.spring(this.descriptionOffset, {toValue: 0}).start()
          Animated.spring(this.descriptionOpacity, {toValue: 1}).start()
        }
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true
      },
    })
  }

  componentDidMount() {
    this.appear()
  }

  componentWillReceiveProps() {
    this.reset()
    this.appear()
  }

  reset() {
    this.imageOffset.setValue(0)
    this.imageOpacity.setValue(0)
    this.imageScale.setValue(0)
    this.titleOffset.setValue(0)
    this.titleOpacity.setValue(0)
    this.titleScale.setValue(0)
    this.descriptionOffset.setValue(0)
    this.descriptionOpacity.setValue(0)
    this.descriptionScale.setValue(0)
  }

  appear() {
    Animated.spring(this.imageOpacity, {toValue: 1}).start()
    Animated.spring(this.imageScale, {toValue: 1}).start()
    Animated.spring(this.titleOpacity, {toValue: 1}).start()
    Animated.spring(this.titleScale, {toValue: 1}).start()
    Animated.spring(this.descriptionOpacity, {toValue: 1}).start()
    Animated.spring(this.descriptionScale, {toValue: 1}).start()
  }

  render() {
    const { steps, currentStep, nextStep } = this.props
    return (
      <BackgroundView>
        <View
          style={styles.container}
          {...this._panResponder.panHandlers}
        >
          <Animated.Image
            resizeMode="contain"
            source={currentStep.image}
            style={[
              {
                left: this.imageOffset,
                opacity: this.imageOpacity,
                transform: [{
                  scale: this.imageScale,
                }],
              },
              styles.image,
            ]}
          />
          <Animated.Text style={[{left: this.titleOffset, opacity: this.titleOpacity,
            transform: [{
              scale: this.titleScale,
            }]}, styles.title]}>
            {currentStep.title}
          </Animated.Text>
          <Animated.Text style={[{left: this.descriptionOffset, opacity: this.descriptionOpacity,
            transform: [{
              scale: this.descriptionScale,
            }]}, styles.description]}>
            {currentStep.description}
          </Animated.Text>
        </View>
        <Navigation
          steps={steps}
          currentStep={currentStep}
          onRightPress={nextStep}
          onFinalRightPress={() => Actions.sign()}
          onLeftPress={() => Actions.sign()}
          leftButtonText={I18n.t('global_skip')}
        />
      </BackgroundView>
    )
  }
}

Onboarding.propTypes = {
  currentStep: PropTypes.object,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  steps: PropTypes.array,
}

Onboarding.defaultProps = {
  currentStep: {},
  nextStep: () => null,
  previousStep: () => null,
  steps: [],
}

export default Onboarding
