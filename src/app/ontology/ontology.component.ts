import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { OntologyService } from '../service/ontology.service'
import { ONTOLOGYFORMATS, pickedOntologyFormat } from '../model/ontologyFormats'

@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

    constructor(public messageService: MessageService,
        public ontologyService: OntologyService) { }

    useChosenFormat = false;
    inputStatus = null;
    ontologyFile: any;
    allOntologyFormats = ONTOLOGYFORMATS
    selectedFormat = pickedOntologyFormat
    currentUrl = ''

    ngOnInit() {
        this.messageService.changeMessage('');
    }

    uploadOntology() {
        if (this.inputStatus == "File") {
            console.log("file")
            this.ontologyService.uploadOntologyFile(this.ontologyFile, "" , this.useChosenFormat)
        }
        else if (this.inputStatus == "Url") {
            console.log("url")
        }

        else {
            console.log("Please select url or file as your option")
            this.messageService.changeMessage("Please select wheter you are wanting to upload a File or a Url")
        }
    }

    urlChanged(url) {
        this.currentUrl = url
        this.messageService.changeMessage('url changed: ' + this.currentUrl);
    }

    ontologyFileUpload() {
        console.log('Ontology File Upload');
        this.messageService.changeMessage('Ontology File Upload');
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
        this.selectedFormat = this.allOntologyFormats.filter(function(Format) { return Format.shortName === newFormat});
        this.messageService.changeMessage('Format Changed');
    }
}
