import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'

import { colors } from '../../constants/style'
import pusher from '../../constants/pusher'

import I18n from '../../i18n'

import { apiWrapper } from '../../utils'

const renderMessage = (message, profileId) => {
  const containerStyle = message.league_profile_id === profileId
    ? styles.messageSent
    : styles.messageReceived
  const textStyle = message.league_profile_id === profileId
    ? styles.messageSentText
    : styles.messageReceivedText
  return <View key={message.id} style={containerStyle}>
    <Text style={textStyle}>{message.content}</Text>
  </View>
}

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sending: false,
    }
  }

  componentWillMount() {
    const { match, pushMessages } = this.props
    const channel = pusher.subscribe(`chat-${match.id}`)
    channel.bind('new_message', data => {
      if (data.league_profile_id === match.leagueProfile.id) {
        pushMessages([data])
      }
    })
  }

  componentWillUnmount() {
    pusher.unsubscribe(`chat-${this.props.match.id}`)
  }

  sendMessage() {
    const { match, sendMessage, draft } = this.props
    const content = draft.trim()
    if (content.length > 0 && !this.state.sending) {
      this.setState({ sending: true })
      apiWrapper
        .createMessage({
          content,
          leagueMatchId: match.id,
        })
        .then(r => this.setState(
          { sending: false },
          () => sendMessage(r.data)
        ))
    }
  }

  render() {
    const { messages, match, updateDraft, draft, displayUser, profileId } = this.props
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={match.leagueProfile.summonerName}
            rightAction={() => displayUser(match)}
            rightIcon="user"
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}
          >
            <ScrollView
              keyboardShouldPersistTaps="always"
              ref={ref => this.scrollView = ref}
              onContentSizeChange={()=> this.scrollView.scrollToEnd({animated: true})}
              style={styles.messagesContainer}
            >
              {messages.map(item => renderMessage(item, profileId))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="sentences"
                enablesReturnKeyAutomatically
                onChangeText={t => updateDraft(match.id, t)}
                onFocus={()=> setTimeout(() => this.scrollView.scrollToEnd({animated: true}), 500)}
                onSubmitEditing={() => this.sendMessage()}
                placeholder={I18n.t('chat_placeholder')}
                ref={ref => this.textInput = ref}
                returnKeyType="send"
                spellCheck
                style={styles.input}
                underlineColorAndroid="transparent"
                value={draft}
              />
              <TouchableOpacity
                onPress={() => this.sendMessage()}
              >
                {
                  this.state.sending
                    ? <ActivityIndicator
                      animating={this.state.sending}
                      color={colors.blue}
                    />
                    : <Text style={styles.sendButton}>{I18n.t('chat_button')}</Text>
                }
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </BackgroundView>
    )
  }
}

Chat.propTypes = {
  draft: PropTypes.string,
  displayUser: PropTypes.func,
  match: PropTypes.object,
  messages: PropTypes.array,
  profileId: PropTypes.string,
  pushMessages: PropTypes.func,
  sendMessage: PropTypes.func,
  updateDraft: PropTypes.func,
}

Chat.defaultProps = {
  draft: '',
  displayUser: () => null,
  match: {},
  messages: [],
  profileId: '',
  pushMessages: () => null,
  sendMessage: () => null,
  updateDraft: () => null,
}

export default Chat
