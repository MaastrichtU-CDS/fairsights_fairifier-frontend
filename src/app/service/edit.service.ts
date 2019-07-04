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
    public tripleMappingArray

    mappingDefinitionChanged = '';

    testMappingDefinitions() {
        console.log('Mapping definition testing is not yet implemented');
        this.testSuccesful = true;
    }

    saveMappingDefinitions() {
        console.log('Mapping definitions saving is not yet implemented');
    }

    getMappingTriples() {
        const extraUrl = '/mapping/triplemaps'
        const url = environment.apiUrl + extraUrl

        return this.http.get(url)
        .subscribe(
            data => {
                console.log(data.toString)
                this.putTriplesInArray(data)
            },
            error => {
                console.log(error);
                this.messageService.changeMessage('Error: ' + error.errormessage)
            }
        );
    }
 
    putTriplesInArray(triplesMapping) {
        this.tripleMappingArray = triplesMapping
        console.log(this.tripleMappingArray)
    }
}

