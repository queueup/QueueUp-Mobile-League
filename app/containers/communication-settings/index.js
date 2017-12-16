
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/communication-settings'

const mapStateToProps = ({ settings }) => ({
  settings,
})

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
