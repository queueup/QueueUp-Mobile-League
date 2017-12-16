import { connect } from 'react-redux'
import Sign from '../../components/sign'
import {
  displaySignin,
  displaySignup,
  updateField,
  resetErrors,
  setError,
} from '../../actions/sign'

const mapStateToProps = ({ sign: {step, email, password, confirmation, errors} }) => ({
  step,
  email,
  password,
  confirmation,
  errors,
})

const mapDispatchToProps = dispatch => ({
  displaySignin: () => dispatch(displaySignin()),
  displaySignup: () => dispatch(displaySignup()),
  updateField: (f, v) => dispatch(updateField(f, v)),
  resetErrors: () => dispatch(resetErrors()),
  setError: (f, v) => dispatch(setError(f, v)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Sign)
