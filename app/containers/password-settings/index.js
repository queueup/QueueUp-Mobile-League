
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/password-settings'

const mapStateToProps = ({settings: { currentPassword, newPassword, newPasswordConfirmation }}) => ({
  currentPassword,
  newPassword,
  newPasswordConfirmation,
})

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
