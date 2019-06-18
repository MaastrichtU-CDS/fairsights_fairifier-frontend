import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OntologyService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    uploadOntologyFile(ontologyFile, fileFormat, baseUri ) {
        console.log(ontologyFile),
        console.log(fileFormat),
        console.log(baseUri)
    }

    uploadOntologyUrl(ontologyUrl, fileFormat, baseUri ) {
        console.log(ontologyUrl),
        console.log(fileFormat),
        console.log(baseUri)
    }
}
