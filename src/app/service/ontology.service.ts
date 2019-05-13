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

    uploadOntologyFile(ontologyFile, fileFormat, useFileFormat ) {
        const extraUrl = "/ontology/import/file"
        const totalUrl = environment.apiUrl + extraUrl
        console.log(totalUrl)
    }

    uploadOntologyUrl(ontologyUrl, fileFormat, useFIleFormat) {
        const extraUrl = "/ontology/import/url"
        const totalUrl = environment.apiUrl + extraUrl
        console.log(totalUrl)
    }
}
