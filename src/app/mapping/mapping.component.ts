import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';
import { MAPPINGFORMATS, pickedMappingFormatUpload, pickedMappingFormatDownload } from '../model/mappingFormats';
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
    inputStatus = null;
    allMappingFormats = MAPPINGFORMATS;
    selectedFormatUpload = pickedMappingFormatUpload;
    selectedFormatDownload = pickedMappingFormatDownload;

    ngOnInit() {
        this.messageService.changeMessage('');
    }

    downloadMapping() {
        console.log(this.selectedFormatDownload)
        if ( this.selectedFormatDownload[0].fullName !== 'No Format Selected' ) {
            this.mappingService.mappingDownload(this.selectedFormatDownload[0].shortName);
        } else {
            this.messageService.changeMessage('Please select a format for Downloading')
        }
        
    }

    mappingFileUpload($event) {
        this.mappingFile = $event.target.files[0];
        this.messageService.changeMessage('Mapping File Chosen');

        this.labelImport.nativeElement.innerText = this.mappingFile.name;
    }

    mappingUpload() {
        if (this.mappingFile !== undefined) {
            this.mappingService.uploadMapping(this.mappingFile, this.selectedFormatUpload[0].shortName);
        } else {
            this.messageService.changeMessage('Please choose a file to upload');
        }
    }

    formatChangedUpload(newMappingFormat) {
        this.selectedFormatUpload = this.allMappingFormats.filter((Format) => Format.shortName === newMappingFormat );
        this.messageService.changeMessage('Format Changed: ' + this.selectedFormatUpload[0].fullName);
    }

    formatChangedDownload(newMappingFormat) {
        this.selectedFormatDownload = this.allMappingFormats.filter((Format) => Format.shortName === newMappingFormat );
        this.messageService.changeMessage('Format Changed: ' + this.selectedFormatDownload[0].fullName);
    }
}
