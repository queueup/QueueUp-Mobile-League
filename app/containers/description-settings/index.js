
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/description-settings'

const mapStateToProps = ({settings: { description }}) => ({
  description,
})

const mapDispatchToProps = dispatch => ({
  updateField: value => dispatch(updateField('description', value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
