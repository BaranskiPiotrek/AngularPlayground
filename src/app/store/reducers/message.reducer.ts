import { MessageItem } from '../models/messageItem';
import { MessageActions } from '../actions/messageAction';
import { createReducer, on } from '@ngrx/store';

export const messagesFeatureKey = 'messages';

export interface State {
  messages: Array<MessageItem>;
}

const initialState: State= {
  messages: []
};

export const MessageReducer = createReducer(
  initialState,
  on(MessageActions.addMessage, (state, message) => {
    if (state.messages.find(el => el.id === message.id )) return state;
    return { ...state, messages: [...state.messages, message]}
  }),
  on(MessageActions.removeMessage, (state, id) => {
    return { messages: state.messages.filter((id) => id.id !== id.id) }
  }),
);