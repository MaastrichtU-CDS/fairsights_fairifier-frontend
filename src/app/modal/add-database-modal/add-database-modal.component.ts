import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATABASEFORMATS } from '../../model/allDatabaseFormats';

@Component({
  selector: 'app-add-database-modal',
  templateUrl: './add-database-modal.component.html',
  styleUrls: ['./add-database-modal.component.css']
})
export class AddDatabaseModalComponent implements OnInit {

    myForm: FormGroup;
    allFormats = DATABASEFORMATS;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder
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
            format: 'CSV',
            databasename: '',
            password: '',
            url: '',
            username: ''
        });
    }

    public submitForm() {
        this.activeModal.close(this.myForm.value);
    }
}
