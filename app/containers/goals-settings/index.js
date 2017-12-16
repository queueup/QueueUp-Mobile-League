
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/goals-settings'

const mapStateToProps = ({settings: { selectedGoals, profileId }}) => ({
  profileId,
  selectedGoals,
})

const mapDispatchToProps = dispatch => ({
  updateField: value => dispatch(updateField('selectedGoals', value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
