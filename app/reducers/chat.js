import {
  CHAT_SET_MATCH,
  CHAT_SEND_MESSAGE,
  CHAT_SET_MESSAGES,
  CHAT_PUSH_MESSAGES,
  CHAT_UPDATE_DRAFT,
} from '../constants/actions'

const initialState = {
  messages: [],
  match: {},
  drafts: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
  case CHAT_SET_MATCH:
    return {
      ...state,
      match: action.match,
    }
  case CHAT_SET_MESSAGES:
    return {
      ...state,
      messages: action.messages,
    }
  case CHAT_PUSH_MESSAGES:
    return {
      ...state,
      messages: [
        ...state.messages,
        ...action.messages,
      ],
    }
  case CHAT_UPDATE_DRAFT:
    return {
      ...state,
      drafts: {
        ...state.drafts,
        [action.match]: action.text,
      },
    }
  case CHAT_SEND_MESSAGE:
    return {
      ...state,
      messages: [
        ...state.messages,
        action.message,
      ],
      drafts: {
        ...state.drafts,
        [state.match.id]: '',
      },
    }
  default:
    return state
  }
}
