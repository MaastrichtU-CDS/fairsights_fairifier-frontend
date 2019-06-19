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
        const extraUrl = '/ontology/import/file?baseUri='
        const baseUriUrl = this.convertUrl(baseUri)
        const formData = new FormData();
        formData.append('file', ontologyFile)
        var formatUrl
        if (fileFormat !== 'No Format Selected' && fileFormat !== 'No Format') {
            formatUrl = '&format=' + fileFormat
        } else {
            formatUrl = ''
        }
        const url = environment.apiUrl + extraUrl + baseUriUrl + formatUrl
        this.http.post(url, formData)
        .subscribe(
            data => {
                console.log(data)
                this.messageService.changeMessage('Uploading Ontologyfile successful')
            },
            error => {
                console.log(error),
                this.messageService.changeMessage('Error: ' + error.message)
            }
        )

    }

    uploadOntologyUrl(ontologyUrl, fileFormat, baseUri ) {
        const extraUrl = '/ontology/import/url?url='
        const urlOntology = this.convertUrl(ontologyUrl)
        const baseUriUrl = '&baseUri=' + this.convertUrl(baseUri)
        const formatUrl = '&format=' + fileFormat
        const url = environment.apiUrl + extraUrl + urlOntology + baseUriUrl + formatUrl
        this.http.post(url, '') 
        .subscribe(
            data => {
                console.log(data),
                this.messageService.changeMessage('Ontology url upload succesfull')
            },
            error => {
                console.log(error),
                this.messageService.changeMessage('Error: ' + error.message)
            }
        )
    }
    
    convertUrl(conversion) {
        conversion = conversion.replace(/\$/g, "%24").replace(/\&/g, "%26").replace(/\+/g, "%2B")
        .replace(/\,/g, "%2C").replace(/\//g, "%2F").replace(/\:/g, "%3A").replace(/\;/g, "%3B")
        .replace(/\=/g, "%3D").replace(/\?/g, "%3F").replace(/\@/g, "%40");
        return conversion
    }
}
