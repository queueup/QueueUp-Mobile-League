import { colors } from '../../constants/style'

const defaultMessageStyle = {
  borderRadius: 10,
  marginVertical: 10,
  paddingHorizontal: 20,
  paddingVertical: 10,
}

const defaultMessageTextStyle = {
  fontSize: 16,
}

export default {
  input: {
    flex: 1,
    height: 50,
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: colors.lightGrey,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
  },
  messageReceived: {
    ...defaultMessageStyle,
    alignSelf: 'flex-start',
    backgroundColor: colors.lightGrey,
  },
  messageReceivedText: {
    ...defaultMessageTextStyle,
  },
  messageSent: {
    ...defaultMessageStyle,
    alignSelf: 'flex-end',
    backgroundColor: colors.blue,
  },
  messageSentPending: {
    ...defaultMessageStyle,
    alignSelf: 'flex-end',
    backgroundColor: colors.blue,
    opacity: 0.3,
  },
  messageSentPendingText: {
    ...defaultMessageTextStyle,
    color: colors.white,
  },
  messageSentText: {
    ...defaultMessageTextStyle,
    color: colors.white,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sendButton: {
    color: colors.blue,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
  },
}
