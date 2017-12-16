
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/roles-settings'

const mapStateToProps = ({settings: { selectedRoles, profileId }}) => ({
  profileId,
  selectedRoles,
})

const mapDispatchToProps = dispatch => ({
  setRoles: champion => dispatch(updateField('selectedRoles', champion)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
