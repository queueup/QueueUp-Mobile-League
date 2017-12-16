
import { connect } from 'react-redux'
import MatchModal from '../../components/match-modal'
import { hideMatchModal } from '../../actions/ux'

const mapStateToProps = ({ ux }) => ({
  display: ux.matchModal,
})

const mapDispatchToProps = dispatch => ({
  hideMatchModal: () => dispatch(hideMatchModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchModal)
