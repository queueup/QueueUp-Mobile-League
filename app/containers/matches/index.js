import { connect } from 'react-redux'
import Matches from '../../components/matches'
import { setMatches } from '../../actions/matches'
import { setMatch, setMessages } from '../../actions/chat'

const mapStateToProps = ({ matches, settings: { ads, favoriteQueue }}) => ({
  ads,
  favoriteQueue,
  matches,
})

const mapDispatchToProps = dispatch => ({
  setMatches: m => dispatch(setMatches(m)),
  setMatch: r => dispatch(setMatch(r)),
  setMessages: m => dispatch(setMessages(m)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Matches)
