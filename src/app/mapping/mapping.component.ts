import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  @ViewChild('labelImport')
  labelImport: ElementRef;
  mappingFile: any;
  useChosenFormat = false;

  ngOnInit() {
    this.messageService.changeMessage('');
  }

  downloadMapping() {
    console.log('Download Mapping');
    this.messageService.changeMessage('Mapping Download');
  }

  mappingFileUpload() {
    console.log('Mapping File Upload');
    this.messageService.changeMessage('Mapping File Upload');
  }

  mappingUpload() {
    console.log('Mapping Upload');
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
