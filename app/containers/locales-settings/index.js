
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/locales-settings'

const mapStateToProps = ({settings: { selectedLocales, profileId }}) => ({
  profileId,
  selectedLocales,
})

const mapDispatchToProps = dispatch => ({
  updateField: value => dispatch(updateField('selectedLocales', value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
