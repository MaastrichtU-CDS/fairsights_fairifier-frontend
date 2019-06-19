import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OntologyService {

    public ontologyArray = [];

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getOntologies() {
        const extraUrl = '/ontologies'
        const url = environment.apiUrl + extraUrl

        this.http.get(url)
        .subscribe(
            data => {
                this.putOntologiesInArray(data)
            },
            error => {
                console.log(error),
                this.messageService.changeMessage('Error: ' + error.message)
            }
        )
    }

    putOntologiesInArray(currentOntologies) {
        this.ontologyArray = currentOntologies
        console.log(this.ontologyArray)
    }

    uploadOntologyFile(ontologyFile, fileFormat, baseUri ) {
        console.log(ontologyFile),
        console.log(fileFormat),
        console.log(baseUri);
    }

    uploadOntologyUrl(ontologyUrl, fileFormat, baseUri ) {
        console.log(ontologyUrl),
        console.log(fileFormat),
        console.log(baseUri);
    }
}
