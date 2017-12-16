import {
  CHAT_SET_MESSAGES,
  CHAT_SEND_MESSAGE,
  CHAT_SET_MATCH,
  CHAT_UPDATE_DRAFT,
  CHAT_PUSH_MESSAGES,
} from '../constants/actions'

export const setMatch = match => ({
  match,
  type: CHAT_SET_MATCH,
})

export const pushMessages = messages => ({
  messages,
  type: CHAT_PUSH_MESSAGES,
})

export const setMessages = messages => ({
  messages,
  type: CHAT_SET_MESSAGES,
})

export const sendMessage = message => ({
  message,
  type: CHAT_SEND_MESSAGE,
})

export const updateDraft = (match, text) => ({
  match,
  text,
  type: CHAT_UPDATE_DRAFT,
})
