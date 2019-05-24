import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { OntologyService } from '../service/ontology.service';
import { ONTOLOGYFORMATS, pickedOntologyFormat } from '../model/ontologyFormats';

@Component({
    selector: 'app-ontology',
    templateUrl: './ontology.component.html',
    styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

    constructor(
        public messageService: MessageService,
        public ontologyService: OntologyService) { }

    @ViewChild('labelImport')
    labelImport: ElementRef;

    useChosenFormat = false;
    inputStatus = null;
    ontologyFile: any;
    allOntologyFormats = ONTOLOGYFORMATS;
    selectedFormat = pickedOntologyFormat;
    currentUrl = '';

    ngOnInit() {
        this.messageService.changeMessage('');
    }

    uploadOntology() {
        if (this.inputStatus === 'File') {
            if (this.ontologyFile !== undefined) {
                this.ontologyService.uploadOntologyFile(this.ontologyFile, this.selectedFormat , this.useChosenFormat);
            }  else {
                    this.messageService.changeMessage('Please select a file to upload');
            }
        }  else if (this.inputStatus === 'Url') {
            if (this.currentUrl !== '') {
                this.ontologyService.uploadOntologyUrl(this.currentUrl, this.selectedFormat, this.useChosenFormat);
            } else {
                this.messageService.changeMessage('Please select a url to upload');
            }
        } else {
            console.log('Please select url or file as your option');
            this.messageService.changeMessage('Please select whether you are wanting to upload a File or a Url');
        }
    }

    urlChanged(url) {
        this.currentUrl = url;
        this.messageService.changeMessage('url changed: ' + this.currentUrl);
    }

    ontologyFileUpload(file) {
        this.ontologyFile = file.target.files[0];

        this.labelImport.nativeElement.innerText = this.ontologyFile.name;
        this.messageService.changeMessage('Ontology File Uploaded: ' + this.ontologyFile.name);
    }

    toggleChoosenFormat(formatYN) {
        this.useChosenFormat = formatYN.target.checked;
        this.messageService.changeMessage('Format is now: ' + this.useChosenFormat);
    }

    toggleInput(status) {
        this.inputStatus = status;
        this.messageService.changeMessage('Type of input is now: ' + this.inputStatus);
    }

    formatChanged(newFormat) {
        this.selectedFormat = this.allOntologyFormats.filter((Format) =>  Format.shortName === newFormat );

        this.messageService.changeMessage('Format Changed: ' + this.selectedFormat[0].fullName );
    }
}
