
import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/suggestions-settings'

const mapStateToProps = ({settings: { favoriteQueue }}) => ({
  favoriteQueue,
})

const mapDispatchToProps = dispatch => ({
  setFavoriteQueue: champion => dispatch(updateField('favoriteQueue', champion)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
