import { connect } from 'react-redux'
import Onboarding from '../../components/onboarding'
import { nextStep, previousStep } from '../../actions/onboarding'
import { steps } from '../../constants/onboarding'

const mapStateToProps = ({ onboarding }) => ({
  currentStep: steps.find(s => s.index === onboarding.currentStepIndex),
  steps,
})

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding)
