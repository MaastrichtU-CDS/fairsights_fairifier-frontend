import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    testString: string;
    validateTestSuccesful;
    validateSaveSuccesful

    changeMessage(status) {
        this.testString = status;
    }

    constructor() { }
}
