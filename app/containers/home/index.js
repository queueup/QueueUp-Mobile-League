
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { addSuggestions, removeSuggestion } from '../../actions/suggestions'
import { displayUser } from '../../actions/users'
import { displayMatchModal } from '../../actions/ux'
import { updateField } from '../../actions/settings'
import Home from '../../components/home'

const mapStateToProps = ({ suggestions, settings: { favoriteQueue, answersCount, nextSuggestionsDate } }) => ({
  answersCount,
  favoriteQueue,
  nextSuggestionsDate,
  suggestions,
})

const mapDispatchToProps = dispatch => ({
  addSuggestions: s => dispatch(addSuggestions(s)),
  displayUser: u => {
    dispatch(displayUser(u))
    Actions.userDetails()
  },
  removeSuggestion: () => dispatch(removeSuggestion()),
  displayMatchModal: () => dispatch(displayMatchModal()),
  updateSetting: (field, value) => dispatch(updateField(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
