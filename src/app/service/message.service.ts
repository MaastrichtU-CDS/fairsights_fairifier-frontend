import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string

  constructor() { }

  changeMessage(status) {
    this.message = status;
   }


}
