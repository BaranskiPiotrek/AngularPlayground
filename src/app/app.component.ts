import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageItem } from './store/models/messageItem';
import { MessageActions } from './store/actions/messageAction';
import { selectMessages, selectMessagesFeature } from './store/selectors/messageSelector';
import { Observable, tap } from 'rxjs';
import { State } from './store/reducers/message.reducer';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularPlayground';
  messages$!: Observable<MessageItem[]>;

  constructor(
    private store: Store<State>,
  ) {}

  addMessage(message : MessageItem) {
     this.store.dispatch(MessageActions.addMessage(message))
  }

  removeMessage(message : MessageItem) {
    this.store.dispatch(MessageActions.removeMessage(message))
  }

  ngOnInit() {
    this.messages$ = this.store.select(selectMessages);

    this.addMessage({id: "1", payload: "TEST"});
    
    setTimeout(() => {
      console.log("TEST");
      this.addMessage({id: "2", payload: "TEST2"});
    }, 5000)
 }


}
