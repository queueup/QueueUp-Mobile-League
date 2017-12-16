
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Chat from '../../components/chat'
import { displayUser } from '../../actions/users'
import { updateDraft, sendMessage, pushMessages } from '../../actions/chat'

const mapStateToProps = ({ chat, settings: { profileId } }) => ({
  messages: chat.messages.sort((a, b) => {
    if(a.created_at < b.created_at) return -1
    if(a.created_at > b.created_at) return 1
    return 0
  }),
  match: chat.match,
  draft: chat.drafts[chat.match.id],
  profileId,
})

const mapDispatchToProps = dispatch => ({
  displayUser: u => {
    dispatch(displayUser(u))
    Actions.userDetails()
  },
  updateDraft: (r, v) => dispatch(updateDraft(r, v)),
  sendMessage: m => dispatch(sendMessage(m)),
  pushMessages: m => dispatch(pushMessages(m)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
