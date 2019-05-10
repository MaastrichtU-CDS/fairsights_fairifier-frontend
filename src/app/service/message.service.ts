import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    testString: string;

    changeMessage(status) {
        this.testString = status;
    }

    constructor() { }
}
