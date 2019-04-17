import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.messageService.changeMessage('');
  }

  uploadOntology() {
    console.log('Ontology Uploaded'),
    this.messageService.changeMessage('Ontology Uploaded');
  }

  urlChanged(url) {
    console.log('url changed'),
    this.messageService.changeMessage('url changed');
  }


  ontologyFileUpload() {
    console.log('Ontology File Upload');
    this.messageService.changeMessage('Ontology File Upload');
  }

  formatChanged() {
    
  }

}
