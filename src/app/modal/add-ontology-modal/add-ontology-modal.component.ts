import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ONTOLOGYFORMATS } from '../../model/ontologyFormats';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-add-ontology-modal',
  templateUrl: './add-ontology-modal.component.html',
  styleUrls: ['./add-ontology-modal.component.css']
})
export class AddOntologyModalComponent implements OnInit {

    myForm: FormGroup;
    allFormats = ONTOLOGYFORMATS;
    ontologyFile: any;
    fileType: string;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        public messageService: MessageService
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }

    private createForm() {
        this.myForm = this.formBuilder.group ({
            url: '',
            file: '',
            format: 'No Format Selected',
            inputType: '',
            baseUri: ''
        });
    }

    fileChanged(file) {
        this.ontologyFile = file.target.files[0];
    }

    toggleInput(currentInput) {
        this.fileType = currentInput;
    }

    public submitForm() {
        this.myForm.value.file = this.ontologyFile;
        this.myForm.value.inputType = this.fileType;
        if  (this.myForm.value.inputType === '' || this.myForm.value.inputType === undefined)  {
            this.messageService.changeMessage('Please select either a url or a file');
        } else {
            if ((this.myForm.value.inputType === 'File' && (this.myForm.value.file
                !== undefined && this.myForm.value.file !== '') ) ||
                (this.myForm.value.inputType === 'Url' && (this.myForm.value.url !== '' && this.myForm.value.url !== undefined))  ) {
                if (this.myForm.value.baseUri !== '' && this.myForm.value.baseUri !== undefined) {
                this.activeModal.close(this.myForm.value);
                } else {
                    this.messageService.changeMessage('Please insert a base Uri');
                }
            } else {
                this.messageService.changeMessage('Please insert a file/url');
            }
        }
    }
}
