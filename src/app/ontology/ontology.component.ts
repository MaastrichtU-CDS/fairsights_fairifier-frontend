import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { OntologyService } from '../service/ontology.service';
import { ONTOLOGYFORMATS, pickedOntologyFormat } from '../model/ontologyFormats';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOntologyModalComponent } from '../modal/add-ontology-modal/add-ontology-modal.component';

@Component({
    selector: 'app-ontology',
    templateUrl: './ontology.component.html',
    styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

    constructor(
        public messageService: MessageService,
        public ontologyService: OntologyService,
        private modalService: NgbModal) { }

    @ViewChild('labelImport')
    labelImport: ElementRef;

    ngOnInit() {
        this.messageService.changeMessage('');
        this.ontologyService.getOntologies();
    }

    openOntologyModal() {
        const modalRef = this.modalService.open(AddOntologyModalComponent);
        modalRef.result.then((result) => {
            this.messageService.changeMessage(''),
            this.uploadOntology(result);
                }) .catch ((error) => {
            console.log(error);
        });
    }

    uploadOntology(result) {
        if (result.inputType === 'File') {
            this.ontologyService.uploadOntologyFile(result.file, result.format, result.baseUri);
        } else {
            this.ontologyService.uploadOntologyUrl(result.url, result.format, result.baseUri);
        }
    }
}
