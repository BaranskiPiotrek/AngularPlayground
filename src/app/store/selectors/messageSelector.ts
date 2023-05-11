import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, messagesFeatureKey } from '../reducers/message.reducer';

export const selectMessagesFeature = createFeatureSelector<State>(
    messagesFeatureKey
);

export const selectMessages = createSelector(
    selectMessagesFeature,
    (state: State) => state.messages
  );

  

 