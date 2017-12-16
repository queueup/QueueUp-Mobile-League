
import { connect } from 'react-redux'
import Settings from '../../components/settings'
import { displayUser } from '../../actions/users'

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  displayUser: u => dispatch(displayUser(u)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
