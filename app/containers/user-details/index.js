import { connect } from 'react-redux'
import UserDetails from '../../components/user-details'
import { displayUser } from '../../actions/users'

const mapStateToProps = ({ users: { selectedUser } }) => ({
  selectedUser,
})

const mapDispatchToProps = dispatch => ({
  displayUser: u => dispatch(displayUser(u)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
