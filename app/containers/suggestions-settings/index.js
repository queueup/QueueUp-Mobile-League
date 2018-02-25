
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/suggestions-settings'

const mapStateToProps = ({settings: {
  favoriteQueue,
  goalsFilter,
  rolesFilter,
  tierFilter,
}}) => ({
  favoriteQueue,
  goalsFilter,
  rolesFilter,
  tierFilter,
})

const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
