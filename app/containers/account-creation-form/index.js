import { connect } from 'react-redux'
import AccountCreationForm from '../../components/account-creation-form'
import { nextStep, previousStep, updateField, setError, resetErrors } from '../../actions/account-creation'
import { steps } from '../../constants/account-creation'
import regions from '../../constants/regions'

const mapStateToProps = ({ accountCreation: {
  currentStepIndex,
  errors,
  goals,
  profileId,
  region,
  roles,
  summonerName,
} }) => ({
  currentStep: steps.find(s => s.index === currentStepIndex),
  errors,
  goals,
  profileId,
  region,
  regions,
  roles,
  steps,
  summonerName,
})

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
  updateField: (f, v) => dispatch(updateField(f, v)),
  setError: (f, v) => dispatch(setError(f, v)),
  resetErrors: () => dispatch(resetErrors()),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreationForm)
