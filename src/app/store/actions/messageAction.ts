import { createActionGroup, props } from '@ngrx/store';
import { MessageItem } from '../models/messageItem';

export const MessageActions = createActionGroup({
    source: 'Message',
    events: {
      'Add Message': props<MessageItem>(),
      'Remove Message': props<MessageItem>(),
    },
});
