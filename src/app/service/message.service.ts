import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  changeMessage(status) {
    this.messages = [];
    this.messages.push(status);
   }

  constructor() { }
}
