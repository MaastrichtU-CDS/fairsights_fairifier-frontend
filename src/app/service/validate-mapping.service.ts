import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ValidateMappingService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    public testSuccesful;
    public tripleMappingArray;
    public triplesTestResult;

    mappingDefinitionChanged = '';

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

    testMappingDefinitions(dataName, totalAmount) {
        this.testSuccesful = true;

        const extraUrl = '/mapping/test'
        const url = environment.apiUrl + extraUrl
        const datasource = "{\"dataSourceName\": \"" + dataName + "\", \"limit\": " + totalAmount + "}"
        return this.http.post(url, datasource, this.options) 
        .subscribe(
            data => {
                this.putTestResultsInArray(data)
            },
            error => {
                console.log(error)
                this.messageService.changeMessage("Error: " + error.message)
            }
        )
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
        let i = 0
        let x = ''
        while (i<this.tripleMappingArray.length) {
            x = x + "Subject: " +  this.tripleMappingArray[i].subject + "\n"
            x = x + "Predicate: " + this.tripleMappingArray[i].predicate + "\n"
            x = x + "Object: " + this.tripleMappingArray[i].object + "\n" + "\n"
            i++
        }
        this.mappingDefinitionChanged = x
    }

    putTestResultsInArray(triplesTestResults) {
        this.triplesTestResult = triplesTestResults
        console.log(this.triplesTestResult)
    }
}

