
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { removeSuggestion } from '../../actions/suggestions'
import { displayUser } from '../../actions/users'
import { displayMatchModal } from '../../actions/ux'
import Home from '../../components/home'

const mapStateToProps = ({ suggestions, settings }) => ({
  suggestions: suggestions,
  favoriteQueue: settings.favoriteQueue,
})

const mapDispatchToProps = dispatch => ({
  displayUser: u => {
    dispatch(displayUser(u))
    Actions.userDetails()
  },
  onAccept: () => dispatch(removeSuggestion()),
  onDeny: () => dispatch(removeSuggestion()),
  displayMatchModal: () => dispatch(displayMatchModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
