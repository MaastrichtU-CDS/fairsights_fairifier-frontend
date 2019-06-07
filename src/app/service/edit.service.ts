import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EditService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    public testSuccesful;

    mappingDefinitionChanged = '';

    testMappingDefinitions() {
        console.log('Mapping definition testing is not yet implemented');
        this.testSuccesful = true;
    }
    saveMappingDefinitions() {
        console.log('Mapping definitions saving is not yet implemented');
    }
}

