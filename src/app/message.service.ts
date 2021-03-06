import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() {console.log(this.messages);  }
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
