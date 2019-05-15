import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { MAPPINGFORMATS, pickedMappingFormat } from '../model/mappingFormats';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

    constructor(public messageService: MessageService) { }

    @ViewChild('labelImport')
    labelImport: ElementRef;
    mappingFile: any;
    useChosenFormat = false;
    inputStatus = null;
    allMappingFormats = MAPPINGFORMATS;
    selectedFormat = pickedMappingFormat;
    currentUrl = '';

    ngOnInit() {
        this.messageService.changeMessage('');
    }

    downloadMapping() {
        console.log('Download Mapping');
        this.messageService.changeMessage('Mapping Download');
    }

    mappingFileUpload($event) {
        this.mappingFile = $event.target.files[0]
        this.messageService.changeMessage('Mapping File Upload');

        this.labelImport.nativeElement.innerText = this.mappingFile.name;
    }

    mappingUpload() {
        console.log('Mapping Upload');
        console.log(this.selectedFormat[0].fullName)
        console.log(this.allMappingFormats[2].fullName)
        this.messageService.changeMessage('Mapping Uploaded');
    }

    formatChanged() {
        console.log('Format Changed');
        this.messageService.changeMessage('Format Changed');
    }

    toggleChoosenFormat(e) {
        this.useChosenFormat = e.target.checked;
        this.messageService.changeMessage(this.useChosenFormat);
    }
}
