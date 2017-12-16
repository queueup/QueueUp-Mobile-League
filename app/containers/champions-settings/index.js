
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/champions-settings'

const mapStateToProps = ({settings: { selectedChampions, profileId }}) => ({
  profileId,
  selectedChampions,
})

const mapDispatchToProps = dispatch => ({
  updateField: value => dispatch(updateField('selectedChampions', value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
