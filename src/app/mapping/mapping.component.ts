import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { MAPPINGFORMATS, pickedMappingFormat } from '../model/mappingFormats';
import { MappingService } from '../service/mapping.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

    constructor(
        public messageService: MessageService,
        public mappingService: MappingService
        ) { }

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
        this.mappingService.mappingDownload(this.selectedFormat[0].shortName)
    }

    mappingFileUpload($event) {
        this.mappingFile = $event.target.files[0]
        this.messageService.changeMessage('Mapping File Chosen');

        this.labelImport.nativeElement.innerText = this.mappingFile.name;
    }

    mappingUpload() {
        if (this.mappingFile != undefined) {
            if (this.useChosenFormat == true) {
                this.mappingService.uploadMapping(this.mappingFile, this.selectedFormat[0].shortName)
            } else {
                this.mappingService.uploadMapping(this.mappingFile, '')
            }
        } else {
            this.messageService.changeMessage('Please choose a file to upload')
        }
    }

    formatChanged(newMappingFormat) {
        this.selectedFormat = this.allMappingFormats.filter(function(Format) { return Format.shortName === newMappingFormat })
        this.messageService.changeMessage('Format Changed: ' + this.selectedFormat[0].fullName);
    }

    toggleChoosenFormat(e) {
        this.useChosenFormat = e.target.checked;
        this.messageService.changeMessage(this.useChosenFormat);
    }
}
